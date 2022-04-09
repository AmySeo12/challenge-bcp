import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

// array in local storage for agencies
let agencies = JSON.parse(localStorage.getItem('agencies')) || [];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(handleRoute))

        function handleRoute() {
            switch (true) {
                case url.endsWith('/agencies/register') && method === 'POST':
                    return register();
                case url.match('/agencies/update') && method === 'PUT':
                    return update();
                case url.match(/\/agencies\/\d+$/) && method === 'GET':
                    return getAgencyById();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }    
        }

        // route functions

        function register() {
            const agency = body

            agency.id = agencies.length ? Math.max(...agencies.map(x => x.id)) + 1 : 1;
            agencies.push(agency);
            localStorage.setItem('agencies', JSON.stringify(agencies));

            return ok();
        }

        function update(){
            const agency = body;
            agencies = agencies.map(
                x => {
                    if(x.id === agency.id){
                        return agency;
                    }

                    return x;
                }
            )

            localStorage.setItem('agencies', JSON.stringify(agencies));
            return ok(agency);
        }

        function getAgencyById() {
            const agency = agencies.find(x => x.id == idFromUrl());
            return ok(agency);
        }

        // helper functions
        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }))
        }

        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }
    }
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};