global with sharing class ASUCOntroller {
    
    @RemoteAction
    global static COntact saveContact(String firstname, 
                                   String lastName,
                                   String email,
                                   String phone,
                                   String degree,
                                   String yearOfGraduation,
                                   String monthOfGraduation){
                                       Contact con = new Contact();
                                       Map <string, string> monthMap = new Map<string, string>();
                                       con.FirstName = firstName;
                                       con.LastName = lastName;
                                       con.Email = email;
                                       con.Phone = phone;
                                       con.rnm__Education_CandidateProf__c  = degree;
                                       con.Bachelors_Graduation_Date__c = date.newInstance(Integer.valueOf(yearOfGraduation), Integer.valueOf(monthOfGraduation), 1);
									   con.accountId = '001i000001QHbhP';
                                       con.Work_Authorization__c = 'U.S. Citizen';
                                       con.eIntern_Apply_Now_Source__c = 'ASU Partnership';
                                       insert con;
  									return con;
                                   }
    
}