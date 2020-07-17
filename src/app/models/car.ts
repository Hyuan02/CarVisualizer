export interface CarsData{
    cars: Car[]
}

export interface Car{
    name: string
    logo: string
    color: string
    topSpeed: number
    acceleration: number
    handling: number
}