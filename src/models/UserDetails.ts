// export enum ObjectiveType {
//     EMAGRECIMENTO = "emagrecimento",
//     DEFINICAO = "definicao",
//     HIPERTROFIA = "hipertrofia" 
// }

export type UserDetails = {
    dateOfBirth: string;
    //objective: ObjectiveType;
    peso: string;
    altura: string;
    daysOfTheWeek: string;
    chronicDisease: string;
    surgery: string;
    injury: string;
    playSports: string;
    bodyBuilding: string;
    controlledMedication: string;
}