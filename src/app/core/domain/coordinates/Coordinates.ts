export class Coordinates {

  private constructor(public readonly latitude: number,
                      public readonly longitude: number) { }

  public static FromPosition(position: Position): Coordinates {
    return new Coordinates(position.coords.latitude, position.coords.longitude);
  }

}
