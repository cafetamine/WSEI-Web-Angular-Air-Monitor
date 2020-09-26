export class InstallationSponsor {

  public constructor(public readonly id: number,
                     public readonly sponsorName: string,
                     public readonly description: string,
                     public readonly logo: string,
                     public readonly link: string,
                     public readonly displayName: string) { }

}
