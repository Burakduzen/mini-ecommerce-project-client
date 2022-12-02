import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { catchError, Observable, of } from 'rxjs';
import { SpinnerType } from '../../base/base.component';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../ui/custom-toastr.service';
import { UserAuthService } from './models/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandlerInterceptorService implements HttpInterceptor {

  constructor(private toastrService: CustomToastrService, private userAuthService: UserAuthService, private router: Router, private spinner: NgxSpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {



    return next.handle(req).pipe(catchError(error => {
      switch (error.status) {
        case HttpStatusCode.Unauthorized:

          this.userAuthService.refreshTokenLogin(localStorage.getItem("refreshToken"), (state) => {
            if (!state) {
              const url = this.router.url;
              if (url == "/products") {
                this.toastrService.message("Sepete ürün eklemeniz için oturum açmanız gerekiyor.", "Oturum Açınız", {
                  messageType: ToastrMessageType.Warning,
                  position: ToastrPosition.TopRight
                });
              }
              else
                this.toastrService.message("Bu işlemi yapmaya yetkiniz bulunmamaktadır!", "Yetkiniz yok!", {
                  messageType: ToastrMessageType.Warning,
                  position: ToastrPosition.BottomFullWidth
                });
            }
          }).then(data => {
             
          });

          break;
        case HttpStatusCode.InternalServerError:
          this.toastrService.message("Sunucuya erişilemiyor!", "Sunucu hatası!", {
            messageType: ToastrMessageType.Warning,
            position: ToastrPosition.BottomFullWidth
          });
          break;
            case HttpStatusCode.BadRequest:
            this.toastrService.message("Geçersiz istek yapıldı!", "Geçersiz istek!", {
              messageType: ToastrMessageType.Warning,
              position: ToastrPosition.BottomFullWidth
            });
          break;
              case HttpStatusCode.NotFound:
              this.toastrService.message("Sayfa bulunamadı!", "Sayfa bulunamadı!", {
                messageType: ToastrMessageType.Warning,
                position: ToastrPosition.BottomFullWidth
              });
          break;
                default:
                  this.toastrService.message("Beklenmeyen hata!", "Hata!", {
                    messageType: ToastrMessageType.Warning,
                    position: ToastrPosition.BottomFullWidth
                  });
          break;
      }
      this.spinner.hide(SpinnerType.BallAtom);
      return of(error);
              }));
          }
}
    
