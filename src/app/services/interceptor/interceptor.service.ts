import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(private loadingService: NgxSpinnerService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadingService.show(); // Mostra o indicador de carregamento
    console.log('INTERCEPTOR WORKS');
    return next.handle(request).pipe(
      finalize(() => {
        this.loadingService.hide(); // Esconde o indicador de carregamento quando a solicitação é finalizada
      })
    );
  }
}
