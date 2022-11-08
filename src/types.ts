export interface Robot {
  _id?: string;
  name: string;
  image: string;
  creation: number;
  features: {
    speed: number;
    resistance: number;
  };
}

export interface ApiRobot {
  robots: Robot[];
}
