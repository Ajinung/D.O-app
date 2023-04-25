//types for user dashboard navigation
export type iBars = {
  pic: any;
  routeName: string;
  cl: string;
  bd: string;
  hov: string;
};

//types for managing props state for user and agent auth sidebar
export type authPropsData = {
  title: string;
  desc: string;
  backgroundColor: string;
  CardColor: string;
};

//types for managing global buttons
export type GlobalButtonProp = {
  padding?: string;
  bg?: string;
  col?: string;
  text?: string;
  bghovercolor?: string;
  hgt?: string;
  bor?: string;
  hovCol?: string;
  width: string;
  //come back and make this compulsory
  onClick?: () => Promise<void>;
};

//types for managing user details
export type userData = {
  name: string;
  email: string;
  phoneNumber: number;
  stationName: string;
  station: string | any;
  role: string;
  address: string;
  password: string;
  numberOfRequests: number;
  _id: string;
};

//types for manageing our agent information

export type agentData = {
  name: string;
  email: string;
  password: string;
  address: string;
  ConfirmPassword: string;
};

//types for the about section in the landing page

export type aBout = {
  logo: any;
  heading: string;
  par: string;
};

export type userHeader = {
  title?: string;
  button?: string;
  amount?: string;
  display: string;
  height: string;
  btnDisplay?: string;
};

export type stationHeader = {
  bg: string;
  title: string;
  subtitle: string;
};

export type mobileNav = {
  firstIcon: any;
  firstText: string;
  firstLink: string;
  secondIcon: any;
  secondText: string;
  secondLink: string;
  thirdIcon: any;
  thirdLink?: any;
  fourthIcon: any;
  fourthText: string;
  fourthLink: string;
  fifthIcon: any;
  fifthText: string;
  fifthLink: string;
  colours: string;
};
