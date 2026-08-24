export interface AuditionInfo {
  title: string;
  entryPeriod: {
    start: string;
    end: string;
    note?: string;
  };
  location: string;
  target: string;
  production: string;
  officialX: string;
  officialXHandle: string;
}

export interface ApplicationFormData {
  fullName: string;
  furigana: string;
  birthdate: string;
  age: string;
  height: string;
  weight: string;
  address: string;
  hobbies: string;
  snsAccounts: string;
  selfPr: string;
  photoCheck: boolean;
}
