import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    // tslint:disable-next-line:no-shadowed-variable


    this.contarTres().then(
      mensaje => console.log( 'Termino', mensaje )
    )
    .catch( error => console.error('error en la promesa', error));

  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {
    // tslint:disable-next-line:no-shadowed-variable
    return new Promise( (resolve, reject) => {

      let contador = 0;
      const itervalo = setInterval(() => {
        contador += 1;

        console.log( contador );
        if (contador === 3) {
          resolve(true);
          clearInterval(itervalo);
        }

      }, 1000);


    });

  }

}
