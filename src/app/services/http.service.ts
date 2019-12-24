/**
* Http Service
* allow you to define code that's accessible and reusable throughout multiple components in all modules
* @package HttpService
* @subpackage app\services\httpservice
* @author Miracle On 22nd Street, Nagaraju M.
*/


import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { HttpUrl } from './httpUrl.component';
import { HttpObservableService } from './http-observable.service';
import { Observable } from 'rxjs';
import { SendService } from './send.service';

@Injectable({
  providedIn: 'root'
})


export class HttpService {

  constructor(private http: HttpClient, private dataClient: HttpObservableService, private send: SendService) { }

  santaId= +localStorage.getItem('santaid')
  familyphotoId=+localStorage.getItem('photoid')
  elfPhotoId=+localStorage.getItem('elfPhotoId')

  public Signupfamily(PostDatafamily): Observable<any> {
    return this.http.post<any>(HttpUrl.signupFamily, PostDatafamily);
  }

  public Signupelf(PostDataelf): Observable<any> {
    return this.http.post<any>(HttpUrl.signupElf, PostDataelf);
  }
  public forgotElf(forgotElf): Observable<any> {
    return this.http.post<any>(HttpUrl.forgotPassword, forgotElf);
  }

  public forgotFamily(forgotFamily): Observable<any> {
    return this.http.post<any>(HttpUrl.forgotPassword, forgotFamily);
  }
  public resetPassword(reset): Observable<any> {
    return this.http.post<any>(HttpUrl.resetPassword, reset);
  }
  public onboardingElf(elfOnboarding): Observable<any> {
    return this.http.post<any>(HttpUrl.onboardingElf, elfOnboarding);
  }
  public onboardingFamily(familyOnboarding): Observable<any> {
    return this.http.post<any>(HttpUrl.onboardingFamily, familyOnboarding);
  }
  public getbrowseFamily() {
    return this.http.get<any>(HttpUrl.browseFamily);
  }

  public filterbrowseFamily(obj){
    let parmas = new HttpParams().set("family_preferences",obj.family_prefernces).set("organisation",obj.organization).set("location",obj.location);
    return this.http.get<any>(HttpUrl.browseFamily,{params:parmas});
  }

  public getbrowseFamilyById(id: number) {
    return this.http.get<any>(HttpUrl.browseFamilyById + '/' + id);
  }
  public matchFamily(matchFamily): Observable<any> {
    return this.http.post<any>(HttpUrl.matchwithFamily, matchFamily);
  }
  public getelfData(): Observable<any> {
    return this.http.get<any>(HttpUrl.elfGetdata);
  }
  public getfamilyData(): Observable<any> {
    return this.http.get<any>(HttpUrl.familyGetdata);
  }

  public getelfDatabyid(id: number): Observable<any> {
    return this.http.get<any>(HttpUrl.elfGetdata+'/'+id);
  }
  public elfprofileMatch(id): Observable<any> {
    return this.http.get<any>(HttpUrl.elfprofileMatchdata + '?elf_profile_id' + '=' + id);
   }  

   public familyprofileMatch(id): Observable<any> {
    return this.http.get<any>(HttpUrl.familyprofileMatchdata + '?family_profile_id' + '=' + id);
   }  
  
  public updateElf(value,id) : Observable<any>{
    return this.http.put<any>(HttpUrl.updateElfProfile+'/'+id,value);
  }
  
  public update(id: number) {
    return this.http.get<any>(HttpUrl.browseFamilyById + '/' + id);
  }

  // public serchbyState(searchValue: any): Observable<any> {
  //   return this.http.get<any>(HttpUrl.searchdata + 'filter_param=state' + '&' + 'filter_value=' + searchValue);
  // }

  public logoutElf(data: any): Observable<any> {
    return this.http.delete<any>(HttpUrl.logoutElf, data);

  }

  public getnewfamilydata(): Observable<any> {
    return this.http.get<any>(HttpUrl.newfamilyList);
  }
  public getmatcheddata(): Observable<any> {
    return this.http.get<any>(HttpUrl.matchedlist);
  }
  

  public getnewfamilydatabyid(id: number): Observable<any> {
    return this.http.get<any>(HttpUrl.newfamilyListbyid + '/' + id);
  }

  public getelfprofilesinAdmin(): Observable<any> {
    return this.http.get<any>(HttpUrl.elfprofilesinAdmin);
  }
    
  public approvedfamilydata(): Observable<any> {
    return this.http.get<any>(HttpUrl.approvedFamilys);
 }

 public approvedfamilydatabyid(id: number): Observable<any> {
  return this.http.get<any>(HttpUrl.approvedFamilysbyid+'/'+id);
}

 public declinedfamilydata(): Observable<any> {
  return this.http.get<any>(HttpUrl.declinedFamilys);
}
public matchedfamilydata(): Observable<any> {
  return this.http.get<any>(HttpUrl.matchedfamily);
}
 
  public approvefamily(approved): Observable<any> {
    return this.http.post<any>(HttpUrl.approvedFam,approved);
  }

  public declinefamily(decline): Observable<any> {
    return this.http.post<any>(HttpUrl.declineFam,decline);
  }
  
  public Elfphoto(elf): Observable<any> {
    return this.http.post<any>(HttpUrl.elfPic,elf);
  }
  public getElfphoto(): Observable<any> {
      return this.http.get<any>(HttpUrl.getelfPic+this.elfPhotoId);
  }
  
  public santaLetterurl(s): Observable<any> {
    return this.http.post<any>(HttpUrl.santa,s);
  }


  public Familyphoto(fam): Observable<any> {
    return this.http.post<any>(HttpUrl.familyPhoto,fam);
  }
  
  public getSanta(santaid): Observable<any> {
    const santaphotoId = santaid;

    return this.http.get<any>(HttpUrl.getSantaid+santaphotoId );
  }

  public getFamilyphoto(photoid): Observable<any> {
    const  familyphotoIds=photoid
    return this.http.get<any>(HttpUrl.getfamilyphotoid+familyphotoIds);
  }

  public getSelectedfamilyProfile(id): Observable<any> {
    return this.http.get<any>(HttpUrl.getSelectedProfile +'/'+ id);
  }
  
  public contactDetails(contact): Observable<any> {
    return this.http.post<any>(HttpUrl.contactDetails,contact);
  }
  
  public userAnalyticsgetdata(): Observable<any> {
    return this.http.get<any>(HttpUrl.useranylytics);
  }
   
}
