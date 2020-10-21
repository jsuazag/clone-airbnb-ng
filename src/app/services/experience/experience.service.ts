import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IExperience } from 'src/app/shared/models/experience.model';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IExperienceResponse } from 'src/app/shared/models/experiencesResponse.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private urlAPI: string = 'https://bankairbnbapp.herokuapp.com';

  constructor(private httpClient: HttpClient) { }

  private handlerError(error: HttpErrorResponse) {
    console.error('Http error', error);
    return throwError(`Error calling api ${error.message}`)
  }

  public getExperiences (): Observable<IExperienceResponse> {
    const url = `${this.urlAPI}/experiences`;
    return this.httpClient.get<IExperienceResponse>(url).pipe(
      retry(2), catchError(this.handlerError)
    );
  }

  public getExperienceById (id: number): any {
    //return this.experiences.find(item => item.id === id)
  }

}
