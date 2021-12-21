type RocketType = {
  rocket_id: string
  rocket_name: string
  rocket_type: string
}

export type LaunchType = {
  flight_number: number
  name: string
  date_local: string
  success: boolean
  rocket: RocketType
  details: string
}
