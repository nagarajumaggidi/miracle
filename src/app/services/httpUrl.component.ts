import { environment } from '../../environments/environment'

export class HttpUrl {

    public static signupFamily = `${environment.serviceUrl}users/sign_up`;  //sign up to the application Family user type
    public static signupElf = `${environment.serviceUrl}users/sign_up`;  //sign up to the application Elf user type
    public static loginBoth = `${environment.serviceUrl}users/login`;  //Role based log in to the application => Elf and family
    public static forgotPassword = `${environment.serviceUrl}users/forgot`;  //Forgot password for Elf and Family
    public static resetPassword = `${environment.serviceUrl}users/reset`;  //reset password both Family and elf
    public static onboardingElf = `${environment.serviceUrl}elf_profiles`;  //onboarding elf profile setup
    public static onboardingFamily = `${environment.serviceUrl}family_profiles`;  //onboarding Family profile setup
    public static browseFamily = `${environment.serviceUrl}family_profiles`; //browse family get data
    public static browseFamilyById = `${environment.serviceUrl}family_profiles`; //browse family get data by id
    public static matchwithFamily = `${environment.serviceUrl}elf_profiles/request_match_with_family`; //Elf and family match
    public static elfGetdata = `${environment.serviceUrl}elf_profiles`;//get elf data
    public static elfprofileMatchdata = `${environment.serviceUrl}elf_profiles/elf_matches`;//get elf family matches
    public static familyprofileMatchdata = `${environment.serviceUrl}family_profiles/family_matches`;//get elf family matches
    public static updateElfProfile = `${environment.serviceUrl}elf_profiles`;//get elf data

    public static familyGetdata = `${environment.serviceUrl}family_profiles/users_family_profile`;//get elf data


    //public static searchdata = `${environment.serviceUrl}elf_profiles/family_filter?`;//search filter
    public static logoutElf = `${environment.serviceUrl}users/logout`;//logout Elf 

    public static newfamilyList = `${environment.serviceUrl}dashboards/new_family_list`;
    public static matchedlist = `${environment.serviceUrl}dashboards/matched_elf_family_list`;

    public static newfamilyListbyid = `${environment.serviceUrl}family_profiles`;
    public static getSelectedProfile = `${environment.serviceUrl}family_profiles`;

    public static elfprofilesinAdmin = `${environment.serviceUrl}dashboards/elf_list`;
    public static approvedFamilys = `${environment.serviceUrl}dashboards/approved_family_list`;
    public static approvedFamilysbyid = `${environment.serviceUrl}dashboards`;
    public static matchedfamily = `${environment.serviceUrl}dashboards/approved_family_list`;
    public static declinedFamilys = `${environment.serviceUrl}dashboards/declined_family_list`;


    public static approvedFam = `${environment.serviceUrl}dashboards/update_family_status`;
    public static declineFam = `${environment.serviceUrl}dashboards/update_family_status`;


    public static elfPic = `${environment.serviceUrl}elf_profiles/create_elf_photo`;
    public static getelfPic = `${environment.serviceUrl}elf_profiles/fetch_elf_photo?id=`;



    public static santa = `${environment.serviceUrl}family_profiles/create_santa_letter`;


    public static familyPhoto = `${environment.serviceUrl}family_profiles/create_family_photo`;

    public static getSantaid = `${environment.serviceUrl}family_profiles/fetch_santa_letter?id=`;

    public static getfamilyphotoid = `${environment.serviceUrl}family_profiles/fetch_family_photo?id=`;

    public static contactDetails = `${environment.serviceUrl}dashboards/contact_details`;
    public static useranylytics = `${environment.serviceUrl}dashboards/user_analytics`;

}
