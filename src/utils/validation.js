export const emailValidation = new RegExp(
  /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,
);

export const passValidation = new RegExp(
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\/@$!%*#?&])[A-Za-z\d\/@$!%*#?&]{8,}$/,
);
