export class InstallationAddress {

  public constructor(public readonly country: string,
                     public readonly city: string,
                     public readonly street: string,
                     public readonly streetNumber: string,
                     public readonly displayAddress1: string,
                     public readonly displayAddress2: string) { }

}
