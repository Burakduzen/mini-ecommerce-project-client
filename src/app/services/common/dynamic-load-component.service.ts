import { ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicLoadComponentService {

  //ViewContainerRef      : dinamik olarak yüklenecek component'i içerisinde barındıran container dır. (Her dinamik yükleme sürecinde önceki viewleri clear etmemiz gerekir.)
  //ComponentFactory    : Componentleri instance'larını oluşturmak için kullanılan nesnedir.
  //ComponentFactoryResolver : Belirli bir component için ComponentFactory'i result eden sınıftır. İçerisindeki resolveComponentFactory fonksiyonu aracılığıyla ilgili componente dair bir componentfactory nesnesi oluşturup döner.

  constructor() { }
  async loadComponent(component: ComponentType, viewContainerRef: ViewContainerRef) {

    let _component: any = null;
    switch (component) {
      case ComponentType.BasketComponent:
        _component = (await import("../../ui/components/baskets/baskets.component")).BasketsComponent;
        break;
    }

    viewContainerRef.clear();
    return viewContainerRef.createComponent(_component)
  }
}


export enum ComponentType {
  BasketComponent
}
