import {Injectable} from '@angular/core' ;
import {Subject} from 'rxjs' ;
import {HttpClient} from '@angular/common/http' ;
import {map} from 'rxjs/operators' ;

@Injectable({providedIn: 'root'})

export class PersonajeService {

  personajes: string[] = ['Capitan America'] ;
  personajesChange = new Subject <string []>();

  constructor (private http : HttpClient ) {}

    fetchPersonajes () {

      this.http.get<any> ('https://swapi.dev/api/people/')
      .pipe (map(resp => {

        return resp.results.map(obj => obj.name) ;

      }))

      .subscribe(resp => {

        this.personajes = resp ;
        this.personajesChange.next(this.personajes) ;

      }) ;

    }

  addPersonaje (name: string) {

    this.personajes.push(name) ;
    this.personajesChange.next(this.personajes) ;

  }

  removePersonaje (name: string) {

    this.personajes = this.personajes.filter(per =>{
      return per !== name ;

    }) ;

      this.personajesChange.next(this.personajes) ;

    }

}
