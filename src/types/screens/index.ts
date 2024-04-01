export enum VirtualRoute {
  HOME = "/",
}

export type ScreenBaseProps = {
  onChangeRoute: (route: VirtualRoute) => void;
};
