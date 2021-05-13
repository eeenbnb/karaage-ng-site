declare module '*.module.css' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames
  export = classNames
}

declare module '*.module.wcss' {
  interface IClassNames {
    default:{
      [className: string]: string
    }
  }
  const classNames: IClassNames
  export = classNames
}
