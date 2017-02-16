var workSans = {
  a: "M21.744,22.896H7.392l-3.36,8.784H0L12.336,0h4.56l12.288,31.68h-4.08L21.744,22.896z M20.352,19.296L16.08,8.064l-1.488-4.416h-0.096L13.104,7.92l-4.32,11.376H20.352z",
  b: "M0,0h11.28c3.648,0,6.36,0.761,8.136,2.28c1.776,1.52,2.664,3.672,2.664,6.456c0,1.664-0.473,3.136-1.416,4.416c-0.944,1.28-2.249,2.081-3.912,2.4V15.6c1.855,0.353,3.343,1.2,4.464,2.544c1.12,1.344,1.68,2.896,1.68,4.656c0,2.72-1.024,4.88-3.072,6.48c-2.048,1.601-4.912,2.4-8.592,2.4H0V0z M11.328,13.92c2.271,0,3.96-0.424,5.064-1.272c1.104-0.847,1.656-2.151,1.656-3.912c0-3.424-2.24-5.136-6.72-5.136H3.84v10.32H11.328z M12.144,28.08c2.239,0,3.919-0.456,5.04-1.368c1.12-0.912,1.68-2.216,1.68-3.912c0-1.696-0.56-3-1.68-3.912c-1.121-0.912-2.801-1.368-5.04-1.368H3.84v10.56H12.144z",
  c: "M22.56,30.36c-2.273,1.52-4.896,2.28-7.872,2.28s-5.568-0.664-7.776-1.992C4.704,29.321,3,27.432,1.8,24.984C0.6,22.536,0,19.648,0,16.32c0-3.296,0.6-6.176,1.8-8.64C3,5.216,4.704,3.32,6.912,1.992C9.12,0.665,11.68,0,14.592,0c3.04,0,5.592,0.624,7.656,1.872s3.607,3.088,4.632,5.52l-3.792,1.776c-0.704-1.855-1.728-3.247-3.072-4.176C18.672,4.064,16.959,3.6,14.88,3.6c-2.177,0-4.08,0.504-5.712,1.512C7.536,6.12,6.271,7.584,5.376,9.504c-0.896,1.92-1.344,4.192-1.344,6.816c0,3.968,0.952,7.08,2.856,9.336c1.904,2.256,4.504,3.384,7.8,3.384c2.144,0,4-0.543,5.568-1.632c1.567-1.087,2.688-2.688,3.36-4.8l3.84,1.44C26.463,26.736,24.832,28.841,22.56,30.36z",
  d: "M21.937,4.128c2.815,2.752,4.224,6.656,4.224,11.712c0,5.056-1.408,8.96-4.224,11.712c-2.816,2.752-6.72,4.128-11.712,4.128H0V0h10.225C15.217,0,19.12,1.376,21.937,4.128z M19.08,24.84c2.032-2.16,3.048-5.16,3.048-9c0-3.84-1.016-6.84-3.048-9c-2.032-2.16-4.855-3.24-8.472-3.24H3.841v24.48h6.768C14.225,28.08,17.048,27,19.08,24.84z",
  e: "M22.943,28.08v3.6H0V0h22.225v3.6H3.84v10.224h14.305v3.6H3.84V28.08H22.943z",
  f: "M3.84,3.6v10.224h14.304v3.6H3.84V31.68H0V0h22.176v3.6H3.84z",
  g: "M27.696,16.176V32.16h-2.88l-0.144-4.272c-0.929,1.536-2.232,2.712-3.912,3.528c-1.68,0.816-3.704,1.224-6.072,1.224c-2.976,0-5.568-0.664-7.776-1.992C4.704,29.321,3,27.432,1.8,24.984C0.6,22.536,0,19.648,0,16.32c0-3.296,0.616-6.176,1.848-8.64c1.231-2.464,2.959-4.36,5.184-5.688C9.255,0.665,11.839,0,14.784,0c3.136,0,5.72,0.593,7.752,1.776c2.032,1.184,3.672,3.008,4.92,5.472l-3.504,1.92C23.248,7.376,22.104,6,20.52,5.04S17.023,3.6,14.784,3.6c-2.144,0-4.024,0.512-5.64,1.536C7.528,6.161,6.271,7.625,5.376,9.528c-0.896,1.904-1.344,4.168-1.344,6.792c0,4.032,0.928,7.16,2.784,9.384c1.855,2.225,4.528,3.336,8.016,3.336c2.751,0,5-0.704,6.744-2.112c1.744-1.408,2.616-3.424,2.616-6.048v-1.104h-10.08v-3.6H27.696z",
  h: "M24.864,0v31.68h-3.84V17.424H3.84V31.68H0V0h3.84v13.824h17.184V0H24.864z",
  i: "M3.841,31.68H0V0h3.841V31.68z",
  j: "M20.305,20.832c0,3.552-0.953,6.329-2.855,8.328c-1.904,2-4.537,3-7.896,3c-3.041,0-5.393-0.744-7.057-2.232C0.832,28.44,0,26.384,0,23.76c0-0.928,0.08-1.776,0.24-2.544l3.553-0.72c-0.129,1.088-0.191,1.856-0.191,2.304c0,1.952,0.463,3.4,1.391,4.344c0.928,0.944,2.4,1.416,4.416,1.416c2.625,0,4.457-0.704,5.496-2.112c1.041-1.408,1.561-3.6,1.561-6.576V0h3.84V20.832z",
  k: "M9.505,15.744l-5.664,5.76V31.68H0V0h3.841v16.32L19.776,0h5.04L12.192,12.912L24.96,31.68h-4.607L9.505,15.744z",
  l: "M21.984,28.08v3.6H0V0h3.84v28.08H21.984z",
  m: "M30.624,31.68h-3.648V11.76l0.432-8.352H27.36L16.944,31.68H13.68L3.264,3.408H3.216l0.432,8.352v19.92H0V0h5.904l6.96,19.248l2.4,7.92h0.096l2.448-7.872L24.72,0h5.904V31.68z",
  n: "M24.864,31.68h-4.752L6.864,10.464l-3.36-6.24H3.456l0.192,5.088V31.68H0V0h4.752l13.2,21.12l3.408,6.336h0.048l-0.192-5.088V0h3.648V31.68z",
  o: "M22.464,1.992c2.207,1.328,3.912,3.216,5.111,5.664c1.201,2.448,1.801,5.336,1.801,8.664s-0.6,6.216-1.801,8.664c-1.199,2.448-2.904,4.336-5.111,5.664c-2.209,1.329-4.801,1.992-7.775,1.992c-2.977,0-5.569-0.664-7.777-1.992C4.704,29.321,3,27.432,1.801,24.984C0.601,22.536,0,19.648,0,16.32s0.601-6.216,1.801-8.664C3,5.208,4.704,3.32,6.912,1.992C9.12,0.665,11.712,0,14.689,0C17.664,0,20.255,0.665,22.464,1.992z M6.889,6.984C4.984,9.24,4.032,12.353,4.032,16.32c0,3.968,0.952,7.08,2.856,9.336c1.903,2.256,4.503,3.384,7.8,3.384c3.295,0,5.895-1.128,7.799-3.384s2.857-5.368,2.857-9.336c0-3.968-0.953-7.08-2.857-9.336C20.583,4.728,17.984,3.6,14.689,3.6C11.392,3.6,8.792,4.728,6.889,6.984z",
  p: "M18.912,2.616c1.953,1.745,2.93,4.088,2.93,7.032c0,2.945-0.977,5.289-2.93,7.032c-1.951,1.745-4.527,2.616-7.727,2.616H3.842v12.384H0V0h11.186C14.385,0,16.961,0.873,18.912,2.616z M16.057,14.184c1.168-1.008,1.752-2.52,1.752-4.536c0-2.016-0.584-3.528-1.752-4.536C14.889,4.104,13.072,3.6,10.609,3.6H3.842v12.096h6.768C13.072,15.696,14.889,15.192,16.057,14.184z",
  q: "M25.728,37.152c0.991-0.32,1.792-0.752,2.4-1.297l1.248,3.553c-0.737,0.64-1.776,1.152-3.12,1.536c-1.344,0.384-2.64,0.575-3.888,0.575c-2.624,0-4.808-0.695-6.552-2.088c-1.745-1.392-2.712-3.688-2.904-6.888c-2.656-0.257-4.952-1.072-6.888-2.448c-1.937-1.375-3.425-3.24-4.464-5.592C0.52,22.152,0,19.424,0,16.32c0-3.328,0.6-6.216,1.8-8.664C3,5.208,4.704,3.32,6.912,1.992C9.12,0.665,11.712,0,14.688,0s5.568,0.665,7.776,1.992c2.208,1.328,3.912,3.216,5.112,5.664c1.2,2.448,1.8,5.336,1.8,8.664c0,3.104-0.528,5.832-1.584,8.184c-1.056,2.352-2.561,4.224-4.512,5.616c-1.952,1.392-4.256,2.2-6.912,2.424c0.16,1.983,0.776,3.328,1.848,4.032c1.072,0.703,2.488,1.057,4.248,1.057C23.647,37.633,24.735,37.472,25.728,37.152z M6.888,25.656c1.904,2.256,4.504,3.384,7.8,3.384c3.295,0,5.896-1.128,7.8-3.384c1.903-2.256,2.856-5.368,2.856-9.336c0-3.968-0.953-7.08-2.856-9.336c-1.904-2.256-4.504-3.384-7.8-3.384c-3.296,0-5.896,1.128-7.8,3.384C4.983,9.24,4.032,12.353,4.032,16.32C4.032,20.289,4.983,23.4,6.888,25.656z",
  r: "M11.424,18.528H3.84v13.152H0V0h12c3.231,0,5.824,0.833,7.776,2.496c1.952,1.665,2.928,3.92,2.928,6.768c0,2.24-0.624,4.128-1.872,5.664s-2.96,2.592-5.136,3.168l8.928,13.584h-4.56L11.424,18.528z M3.84,14.928h8.112c4.479,0,6.72-1.888,6.72-5.664c0-3.775-2.24-5.664-6.72-5.664H3.84V14.928z",
  s: "M25.296,6.72l-3.312,2.688c-0.96-2.112-2.104-3.607-3.432-4.488c-1.328-0.879-3.144-1.32-5.448-1.32c-2.433,0-4.344,0.504-5.736,1.512C5.976,6.12,5.28,7.409,5.28,8.976c0,1.024,0.271,1.872,0.816,2.544c0.544,0.672,1.448,1.256,2.712,1.752c1.264,0.497,3.016,0.936,5.256,1.32c4.191,0.704,7.159,1.76,8.904,3.168c1.744,1.408,2.616,3.36,2.616,5.856c0,1.792-0.504,3.368-1.512,4.728c-1.008,1.36-2.44,2.417-4.296,3.168c-1.856,0.751-4,1.127-6.432,1.127c-3.2,0-5.928-0.623-8.184-1.872C2.904,29.52,1.183,27.856,0,25.776l3.312-2.688c0.864,1.888,2.136,3.352,3.816,4.392c1.68,1.041,3.784,1.56,6.312,1.56c2.496,0,4.479-0.456,5.952-1.368c1.472-0.912,2.208-2.2,2.208-3.864c0-1.408-0.64-2.527-1.92-3.36c-1.28-0.832-3.552-1.536-6.816-2.112c-4.224-0.735-7.216-1.792-8.976-3.168c-1.76-1.375-2.64-3.295-2.64-5.76c0-1.696,0.48-3.264,1.44-4.704s2.335-2.583,4.128-3.432C8.607,0.425,10.688,0,13.056,0C18.72,0,22.8,2.24,25.296,6.72z",
  t: "M25.92,3.6H14.88v28.08h-3.84V3.6H0V0h25.92V3.6z",
  u: "M24.864,19.873c0,4.064-1.064,7.127-3.192,9.191s-5.208,3.096-9.239,3.096c-4.032,0-7.112-1.039-9.24-3.119C1.063,26.961,0,23.904,0,19.873V0h3.841v18.912c0,3.329,0.695,5.77,2.088,7.32c1.392,1.553,3.56,2.328,6.504,2.328c2.943,0,5.111-0.775,6.504-2.328c1.392-1.551,2.088-3.991,2.088-7.32V0h3.84V19.873z",
  v: "M16.416,31.68h-4.368L0,0h4.128l8.064,21.888l2.016,6.288l2.016-6.24L24.288,0h4.128L16.416,31.68z",
  w: "M14.112,31.68H9.36L0,0h4.128l7.632,28.655L19.248,0h4.368l7.488,28.752L38.784,0h3.888L33.36,31.68h-4.752l-5.616-20.544L21.36,3.983h-0.048l-1.632,7.152L14.112,31.68z",
  x: "M21.648,31.681l-8.593-13.104L4.464,31.681H0l11.088-16.128L0.96,0h4.56l8.064,12.385L21.696,0h4.08L15.551,15.36l10.561,16.32H21.648z",
  y: "M15.168,19.296V31.68h-3.841V19.296L0,0h4.56l8.688,15.359L21.936,0h4.56L15.168,19.296z",
  z: "M24.911,28.08v3.6H0v-3.408L19.728,3.6H0.479V0h23.808v3.407L4.56,28.08H24.911z",
  0: "M3.024,28.464C1.008,25.68,0,21.633,0,16.32c0-5.312,1.008-9.36,3.024-12.145C5.04,1.393,7.968,0,11.808,0c3.84,0,6.768,1.393,8.784,4.176c2.016,2.784,3.024,6.833,3.024,12.145c0,5.313-1.008,9.359-3.024,12.144s-4.944,4.177-8.784,4.177C7.968,32.641,5.04,31.248,3.024,28.464z M17.616,25.896c1.344-2.191,2.016-5.384,2.016-9.576s-0.672-7.384-2.016-9.576c-1.344-2.191-3.28-3.288-5.808-3.288C9.28,3.456,7.344,4.553,6,6.744c-1.344,2.192-2.016,5.384-2.016,9.576S4.656,23.705,6,25.896c1.344,2.192,3.28,3.288,5.808,3.288C14.335,29.185,16.272,28.089,17.616,25.896z",
  1: "M12.96,0v31.68H9.12V8.447c0-0.672,0.032-1.903,0.096-3.695c-1.088,1.056-2.352,1.976-3.792,2.76c-1.44,0.784-2.913,1.353-4.416,1.704L0,5.712c0.768-0.097,1.808-0.456,3.12-1.08c1.312-0.624,2.576-1.36,3.792-2.208C8.128,1.576,9.024,0.768,9.6,0H12.96z",
  2: "M1.008,29.04c4.384-3.231,7.744-5.896,10.08-7.992c2.335-2.095,4.008-3.999,5.016-5.712c1.008-1.711,1.512-3.512,1.512-5.399s-0.608-3.416-1.824-4.584c-1.216-1.168-2.849-1.752-4.896-1.752c-2.144,0-3.88,0.704-5.208,2.111C4.36,7.121,3.583,9.024,3.36,11.424L0,9.408c0.416-2.848,1.576-5.128,3.48-6.84C5.384,0.856,7.903,0,11.04,0c2.112,0,3.976,0.416,5.592,1.248c1.616,0.833,2.856,2,3.72,3.504c0.864,1.505,1.296,3.232,1.296,5.185c0,2.048-0.488,4.016-1.464,5.903c-0.977,1.889-2.568,3.873-4.776,5.952c-2.208,2.081-5.184,4.368-8.928,6.864v0.048c2.112-0.096,3.696-0.144,4.752-0.144H22.32v3.6H1.008V29.04z",
  3: "M16.824,1.128c1.488,0.753,2.616,1.752,3.384,3s1.152,2.624,1.152,4.128c0,1.473-0.271,2.801-0.816,3.984c-0.544,1.185-1.271,2.12-2.184,2.808c-0.912,0.688-1.896,1.032-2.952,1.032v0.096c2.017,0,3.632,0.729,4.849,2.185c1.215,1.456,1.824,3.224,1.824,5.304c0,1.696-0.457,3.232-1.369,4.608s-2.216,2.447-3.912,3.216c-1.695,0.768-3.647,1.152-5.855,1.152c-5.28,0-8.928-2.528-10.944-7.584l3.552-1.872c0.64,1.952,1.528,3.416,2.664,4.392c1.136,0.977,2.808,1.464,5.016,1.464c2.144,0,3.823-0.535,5.04-1.607c1.216-1.072,1.824-2.456,1.824-4.152c0-1.951-0.584-3.319-1.752-4.104C15.175,18.393,13.328,18,10.799,18H9.552v-3.6h1.248c4.385,0,6.576-1.792,6.576-5.376c0-1.792-0.504-3.145-1.512-4.057c-1.008-0.911-2.456-1.367-4.344-1.367c-1.856,0-3.336,0.424-4.44,1.271C5.976,5.721,5.215,6.912,4.8,8.448l-3.6-1.68c0.768-2.08,2.072-3.728,3.912-4.944C6.952,0.608,9.072,0,11.471,0C13.551,0,15.336,0.377,16.824,1.128z",
  4: "M24.912,23.376h-5.616v8.304h-3.84v-8.304H0v-2.832L14.447,0h4.849v20.063h5.616V23.376z M4.08,20.063h11.376V8.208l0.191-5.088h-0.096c-0.801,1.632-1.856,3.392-3.168,5.279L4.08,20.063z",
  5: "M19.152,14.184c1.824,1.872,2.736,4.344,2.736,7.416c0,3.296-0.961,5.88-2.881,7.752s-4.576,2.809-7.967,2.809c-2.85,0-5.16-0.616-6.938-1.849C2.328,29.08,0.961,27.28,0,24.912l3.744-1.969c0.543,1.856,1.352,3.257,2.424,4.2c1.072,0.944,2.648,1.416,4.729,1.416c2.176,0,3.887-0.592,5.135-1.776c1.248-1.183,1.873-2.815,1.873-4.896c0-2.239-0.576-3.952-1.729-5.136s-2.816-1.776-4.992-1.776c-3.295,0-5.648,1.024-7.055,3.072H0.721L2.641,0h17.807v3.6H5.904l-1.248,9.984l-0.049,0.432h0.049c1.695-1.76,4.111-2.64,7.248-2.64C14.912,11.376,17.328,12.312,19.152,14.184z",
  6: "M18.576,1.584c1.6,1.057,2.896,2.753,3.888,5.088l-3.552,1.681c-1.024-3.168-3.28-4.752-6.768-4.752c-1.664,0-3.144,0.592-4.44,1.775C6.408,6.561,5.4,8.177,4.68,10.225C3.96,12.272,3.6,14.544,3.6,17.04v0.864h0.192c0.48-1.888,1.567-3.328,3.264-4.32c1.696-0.991,3.504-1.488,5.424-1.488c3.231,0,5.815,0.929,7.752,2.784c1.936,1.856,2.904,4.353,2.904,7.488c0,3.137-0.984,5.633-2.952,7.488c-1.968,1.856-4.616,2.784-7.944,2.784c-2.592,0-4.808-0.696-6.648-2.089c-1.84-1.392-3.232-3.312-4.176-5.76C0.472,22.344,0,19.521,0,16.32c0-3.456,0.535-6.408,1.608-8.856C2.68,5.017,4.152,3.161,6.024,1.896C7.896,0.633,10.015,0,12.384,0C14.911,0,16.975,0.528,18.576,1.584z M7.2,17.616c-1.28,1.217-1.92,2.784-1.92,4.704c0,1.984,0.631,3.584,1.896,4.8c1.264,1.217,2.936,1.824,5.016,1.824c2.176,0,3.872-0.584,5.088-1.752c1.216-1.168,1.824-2.792,1.824-4.872c0-2.017-0.608-3.607-1.824-4.776c-1.216-1.168-2.912-1.752-5.088-1.752C10.144,15.792,8.479,16.4,7.2,17.616z",
  7: "M23.328,0v3.6c-3.936,4.128-6.809,8.48-8.616,13.056C12.904,21.232,12,26.24,12,31.68H8.064c0-5.184,0.936-10.168,2.808-14.952c1.872-4.783,4.632-9.159,8.28-13.128H0V0H23.328z",
  8: "M18.864,2.232C20.688,3.721,21.6,5.744,21.6,8.305c0,1.632-0.392,3.064-1.176,4.296c-0.785,1.232-1.88,2.168-3.288,2.808v0.048c1.855,0.704,3.304,1.745,4.344,3.12c1.04,1.376,1.56,3.041,1.56,4.992c0,1.824-0.473,3.416-1.416,4.776c-0.944,1.36-2.289,2.408-4.032,3.144c-1.745,0.735-3.768,1.104-6.072,1.104c-2.304,0-4.32-0.369-6.048-1.104S2.4,29.705,1.44,28.345S0,25.393,0,23.568c0-1.92,0.52-3.584,1.56-4.992c1.039-1.407,2.503-2.448,4.392-3.12v-0.048c-1.408-0.607-2.512-1.536-3.312-2.784c-0.8-1.248-1.2-2.688-1.2-4.319c0-2.561,0.912-4.584,2.736-6.072C6,0.744,8.448,0,11.52,0C14.592,0,17.04,0.744,18.864,2.232z M17.04,27.433c1.344-1.04,2.016-2.456,2.016-4.248c0-1.824-0.68-3.256-2.04-4.296c-1.36-1.04-3.192-1.561-5.496-1.561c-2.272,0-4.097,0.528-5.472,1.584c-1.376,1.057-2.064,2.48-2.064,4.272s0.68,3.208,2.04,4.248c1.36,1.04,3.192,1.56,5.496,1.56C13.855,28.992,15.696,28.473,17.04,27.433z M7.056,4.944C5.968,5.841,5.424,7.089,5.424,8.688c0,1.536,0.56,2.76,1.68,3.672c1.12,0.912,2.592,1.368,4.416,1.368c1.824,0,3.295-0.456,4.416-1.368c1.12-0.912,1.68-2.136,1.68-3.672c0-1.6-0.544-2.848-1.632-3.744c-1.088-0.896-2.576-1.344-4.464-1.344C9.631,3.601,8.144,4.049,7.056,4.944z",
  9: "M17.592,2.064c1.84,1.376,3.232,3.288,4.176,5.735c0.943,2.448,1.416,5.289,1.416,8.521c0,5.313-1.039,9.359-3.119,12.144s-5.105,4.177-9.072,4.177c-2.849,0-5.161-0.592-6.936-1.776C2.28,29.681,0.928,27.888,0,25.488l3.792-2.017c0.576,1.889,1.368,3.288,2.377,4.2c1.008,0.912,2.599,1.368,4.775,1.368c3.168,0,5.416-1.2,6.744-3.6c1.328-2.4,1.992-5.872,1.992-10.416v-0.433h-0.191c-0.449,2.112-1.512,3.633-3.191,4.561c-1.682,0.929-3.561,1.392-5.641,1.392c-3.201,0-5.768-0.928-7.704-2.784c-1.937-1.855-2.904-4.352-2.904-7.487S1.032,4.641,3,2.784C4.968,0.929,7.616,0,10.943,0C13.535,0,15.752,0.688,17.592,2.064z M5.904,5.448C4.687,6.616,4.08,8.24,4.08,10.32c0,2.016,0.607,3.608,1.824,4.775c1.216,1.169,2.912,1.753,5.088,1.753c2.047,0,3.711-0.608,4.992-1.824c1.279-1.216,1.92-2.784,1.92-4.704c0-1.984-0.633-3.584-1.896-4.8s-2.936-1.824-5.016-1.824C8.816,3.696,7.12,4.28,5.904,5.448z",
  "-": "M15.84,3.984H0V0h15.84V3.984z",
  "'": "M0.96,11.472C0.319,10.607,0,9.488,0,8.111c0-1.695,0.432-3.264,1.296-4.704C2.16,1.968,3.472,0.832,5.232,0l2.016,1.872C6,2.288,4.96,2.944,4.128,3.84c-0.833,0.896-1.36,1.872-1.584,2.928l0.192,0.096C3.024,6.64,3.472,6.527,4.08,6.527c0.672,0,1.279,0.265,1.824,0.792C6.448,7.848,6.72,8.592,6.72,9.552c0,0.864-0.305,1.616-0.912,2.256c-0.608,0.641-1.344,0.96-2.208,0.96C2.479,12.768,1.6,12.336,0.96,11.472z",
  "/": "M3.6,38.4H0L14.688,0h3.6L3.6,38.4z",
  ".": "M5.376,0.863C5.952,1.439,6.24,2.192,6.24,3.12S5.952,4.8,5.376,5.376C4.801,5.952,4.048,6.24,3.12,6.24c-0.929,0-1.68-0.288-2.256-0.864S0,4.048,0,3.12s0.288-1.681,0.864-2.257C1.44,0.288,2.191,0,3.12,0C4.048,0,4.801,0.288,5.376,0.863z",
  ",": "M6.287,1.296C6.928,2.16,7.248,3.28,7.248,4.656c0,1.695-0.434,3.264-1.297,4.703c-0.863,1.44-2.176,2.576-3.936,3.408L0,10.896c1.248-0.416,2.287-1.072,3.119-1.968C3.951,8.031,4.479,7.056,4.703,6L4.512,5.903C4.223,6.127,3.775,6.24,3.168,6.24c-0.672,0-1.281-0.265-1.824-0.792C0.799,4.92,0.527,4.176,0.527,3.216c0-0.864,0.303-1.615,0.912-2.256C2.047,0.32,2.783,0,3.646,0C4.768,0,5.646,0.432,6.287,1.296z",
  ":": "M5.376,0.864C5.951,1.44,6.239,2.192,6.239,3.12c0,0.929-0.288,1.681-0.863,2.257C4.8,5.952,4.048,6.24,3.119,6.24c-0.928,0-1.68-0.288-2.256-0.863C0.288,4.801,0,4.049,0,3.12c0-0.928,0.288-1.68,0.863-2.256C1.439,0.288,2.191,0,3.119,0C4.048,0,4.8,0.288,5.376,0.864z M5.376,19.584c0.575,0.576,0.863,1.329,0.863,2.257s-0.288,1.68-0.863,2.256c-0.576,0.576-1.328,0.864-2.257,0.864c-0.928,0-1.68-0.288-2.256-0.864C0.288,23.521,0,22.769,0,21.841s0.288-1.681,0.863-2.257c0.576-0.575,1.328-0.863,2.256-0.863C4.048,18.721,4.8,19.009,5.376,19.584z"
};

var morseMnemonics = {
  a: [{
    type: 'circle',
    x: 2.5,
    y: 2.5,
    r: 2.5
  }, {
    type: 'rect',
    x: 0.057,
    y: 11.338,
    w: 5,
    h: 18
  }, {
    type: 'circle',
    x: 2.5,
    y: 38.453,
    r: 2.5
  }, {
    type: 'circle',
    x: 25.953,
    y: 38.453,
    r: 2.5
  }],
  b: [{
    type: 'circle',
    x: 2.5,
    y: 2.5,
    r: 2.5
  }, {
    type: 'rect',
    x: 0.057,
    y: 11.338,
    w: 5,
    h: 18
  }, {
    type: 'circle',
    x: 2.5,
    y: 38.453,
    r: 2.5
  }, {
    type: 'circle',
    x: 25.953,
    y: 38.453,
    r: 2.5
  }],
  c: [{
    type: 'circle',
    x: 2.5,
    y: 2.5,
    r: 2.5
  }, {
    type: 'rect',
    x: 0.057,
    y: 11.338,
    w: 5,
    h: 18
  }, {
    type: 'circle',
    x: 2.5,
    y: 38.453,
    r: 2.5
  }, {
    type: 'circle',
    x: 25.953,
    y: 38.453,
    r: 2.5
  }],
  d: [{
    type: 'circle',
    x: 2.5,
    y: 2.5,
    r: 2.5
  }, {
    type: 'rect',
    x: 0.057,
    y: 11.338,
    w: 5,
    h: 18
  }, {
    type: 'circle',
    x: 2.5,
    y: 38.453,
    r: 2.5
  }, {
    type: 'circle',
    x: 25.953,
    y: 38.453,
    r: 2.5
  }],
  e: [{
    type: 'circle',
    x: 2.5,
    y: 2.5,
    r: 2.5
  }, {
    type: 'rect',
    x: 0.057,
    y: 11.338,
    w: 5,
    h: 18
  }, {
    type: 'circle',
    x: 2.5,
    y: 38.453,
    r: 2.5
  }, {
    type: 'circle',
    x: 25.953,
    y: 38.453,
    r: 2.5
  }],
  f: [{
    type: 'circle',
    x: 2.5,
    y: 2.5,
    r: 2.5
  }, {
    type: 'rect',
    x: 0.057,
    y: 11.338,
    w: 5,
    h: 18
  }, {
    type: 'circle',
    x: 2.5,
    y: 38.453,
    r: 2.5
  }, {
    type: 'circle',
    x: 25.953,
    y: 38.453,
    r: 2.5
  }],
  g: [{
    type: 'circle',
    x: 2.5,
    y: 2.5,
    r: 2.5
  }, {
    type: 'rect',
    x: 0.057,
    y: 11.338,
    w: 5,
    h: 18
  }, {
    type: 'circle',
    x: 2.5,
    y: 38.453,
    r: 2.5
  }, {
    type: 'circle',
    x: 25.953,
    y: 38.453,
    r: 2.5
  }],
  h: [{
    type: 'circle',
    x: 2.5,
    y: 2.5,
    r: 2.5
  }, {
    type: 'rect',
    x: 0.057,
    y: 11.338,
    w: 5,
    h: 18
  }, {
    type: 'circle',
    x: 2.5,
    y: 38.453,
    r: 2.5
  }, {
    type: 'circle',
    x: 25.953,
    y: 38.453,
    r: 2.5
  }],
  i: [{
    type: 'circle',
    x: 2.5,
    y: 2.5,
    r: 2.5
  }, {
    type: 'rect',
    x: 0.057,
    y: 11.338,
    w: 5,
    h: 18
  }, {
    type: 'circle',
    x: 2.5,
    y: 38.453,
    r: 2.5
  }, {
    type: 'circle',
    x: 25.953,
    y: 38.453,
    r: 2.5
  }],
  j: [{
    type: 'circle',
    x: 2.5,
    y: 2.5,
    r: 2.5
  }, {
    type: 'rect',
    x: 0.057,
    y: 11.338,
    w: 5,
    h: 18
  }, {
    type: 'circle',
    x: 2.5,
    y: 38.453,
    r: 2.5
  }, {
    type: 'circle',
    x: 25.953,
    y: 38.453,
    r: 2.5
  }],
  k: [{
    type: 'circle',
    x: 2.5,
    y: 2.5,
    r: 2.5
  }, {
    type: 'rect',
    x: 0.057,
    y: 11.338,
    w: 5,
    h: 18
  }, {
    type: 'circle',
    x: 2.5,
    y: 38.453,
    r: 2.5
  }, {
    type: 'circle',
    x: 25.953,
    y: 38.453,
    r: 2.5
  }],
  l: [{
    type: 'circle',
    x: 2.5,
    y: 2.5,
    r: 2.5
  }, {
    type: 'rect',
    x: 0.057,
    y: 11.338,
    w: 5,
    h: 18
  }, {
    type: 'circle',
    x: 2.5,
    y: 38.453,
    r: 2.5
  }, {
    type: 'circle',
    x: 25.953,
    y: 38.453,
    r: 2.5
  }],
  m: [{
    type: 'circle',
    x: 2.5,
    y: 2.5,
    r: 2.5
  }, {
    type: 'rect',
    x: 0.057,
    y: 11.338,
    w: 5,
    h: 18
  }, {
    type: 'circle',
    x: 2.5,
    y: 38.453,
    r: 2.5
  }, {
    type: 'circle',
    x: 25.953,
    y: 38.453,
    r: 2.5
  }],
  n: [{
    type: 'circle',
    x: 2.5,
    y: 2.5,
    r: 2.5
  }, {
    type: 'rect',
    x: 0.057,
    y: 11.338,
    w: 5,
    h: 18
  }, {
    type: 'circle',
    x: 2.5,
    y: 38.453,
    r: 2.5
  }, {
    type: 'circle',
    x: 25.953,
    y: 38.453,
    r: 2.5
  }],
  o: [{
    type: 'circle',
    x: 2.5,
    y: 2.5,
    r: 2.5
  }, {
    type: 'rect',
    x: 0.057,
    y: 11.338,
    w: 5,
    h: 18
  }, {
    type: 'circle',
    x: 2.5,
    y: 38.453,
    r: 2.5
  }, {
    type: 'circle',
    x: 25.953,
    y: 38.453,
    r: 2.5
  }],
  p: [{
    type: 'circle',
    x: 2.5,
    y: 2.5,
    r: 2.5
  }, {
    type: 'rect',
    x: 0.057,
    y: 11.338,
    w: 5,
    h: 18
  }, {
    type: 'circle',
    x: 2.5,
    y: 38.453,
    r: 2.5
  }, {
    type: 'circle',
    x: 25.953,
    y: 38.453,
    r: 2.5
  }],
  q: [{
    type: 'circle',
    x: 2.5,
    y: 2.5,
    r: 2.5
  }, {
    type: 'rect',
    x: 0.057,
    y: 11.338,
    w: 5,
    h: 18
  }, {
    type: 'circle',
    x: 2.5,
    y: 38.453,
    r: 2.5
  }, {
    type: 'circle',
    x: 25.953,
    y: 38.453,
    r: 2.5
  }],
  r: [{
    type: 'circle',
    x: 2.5,
    y: 2.5,
    r: 2.5
  }, {
    type: 'rect',
    x: 0.057,
    y: 11.338,
    w: 5,
    h: 18
  }, {
    type: 'circle',
    x: 2.5,
    y: 38.453,
    r: 2.5
  }, {
    type: 'circle',
    x: 25.953,
    y: 38.453,
    r: 2.5
  }],
  s: [{
    type: 'circle',
    x: 2.5,
    y: 2.5,
    r: 2.5
  }, {
    type: 'rect',
    x: 0.057,
    y: 11.338,
    w: 5,
    h: 18
  }, {
    type: 'circle',
    x: 2.5,
    y: 38.453,
    r: 2.5
  }, {
    type: 'circle',
    x: 25.953,
    y: 38.453,
    r: 2.5
  }],
  t: [{
    type: 'circle',
    x: 2.5,
    y: 2.5,
    r: 2.5
  }, {
    type: 'rect',
    x: 0.057,
    y: 11.338,
    w: 5,
    h: 18
  }, {
    type: 'circle',
    x: 2.5,
    y: 38.453,
    r: 2.5
  }, {
    type: 'circle',
    x: 25.953,
    y: 38.453,
    r: 2.5
  }],
  u: [{
    type: 'circle',
    x: 2.5,
    y: 2.5,
    r: 2.5
  }, {
    type: 'rect',
    x: 0.057,
    y: 11.338,
    w: 5,
    h: 18
  }, {
    type: 'circle',
    x: 2.5,
    y: 38.453,
    r: 2.5
  }, {
    type: 'circle',
    x: 25.953,
    y: 38.453,
    r: 2.5
  }],
  v: [{
    type: 'circle',
    x: 2.5,
    y: 2.5,
    r: 2.5
  }, {
    type: 'rect',
    x: 0.057,
    y: 11.338,
    w: 5,
    h: 18
  }, {
    type: 'circle',
    x: 2.5,
    y: 38.453,
    r: 2.5
  }, {
    type: 'circle',
    x: 25.953,
    y: 38.453,
    r: 2.5
  }],
  w: [{
    type: 'circle',
    x: 2.5,
    y: 2.5,
    r: 2.5
  }, {
    type: 'rect',
    x: 0.057,
    y: 11.338,
    w: 5,
    h: 18
  }, {
    type: 'circle',
    x: 2.5,
    y: 38.453,
    r: 2.5
  }, {
    type: 'circle',
    x: 25.953,
    y: 38.453,
    r: 2.5
  }],
  x: [{
    type: 'circle',
    x: 2.5,
    y: 2.5,
    r: 2.5
  }, {
    type: 'rect',
    x: 0.057,
    y: 11.338,
    w: 5,
    h: 18
  }, {
    type: 'circle',
    x: 2.5,
    y: 38.453,
    r: 2.5
  }, {
    type: 'circle',
    x: 25.953,
    y: 38.453,
    r: 2.5
  }],
  y: [{
    type: 'circle',
    x: 2.5,
    y: 2.5,
    r: 2.5
  }, {
    type: 'rect',
    x: 0.057,
    y: 11.338,
    w: 5,
    h: 18
  }, {
    type: 'circle',
    x: 2.5,
    y: 38.453,
    r: 2.5
  }, {
    type: 'circle',
    x: 25.953,
    y: 38.453,
    r: 2.5
  }],
  z: [{
    type: 'circle',
    x: 2.5,
    y: 2.5,
    r: 2.5
  }, {
    type: 'rect',
    x: 0.057,
    y: 11.338,
    w: 5,
    h: 18
  }, {
    type: 'circle',
    x: 2.5,
    y: 38.453,
    r: 2.5
  }, {
    type: 'circle',
    x: 25.953,
    y: 38.453,
    r: 2.5
  }],
  0: [{
    type: 'circle',
    x: 2.5,
    y: 2.5,
    r: 2.5
  }, {
    type: 'rect',
    x: 0.057,
    y: 11.338,
    w: 5,
    h: 18
  }, {
    type: 'circle',
    x: 2.5,
    y: 38.453,
    r: 2.5
  }, {
    type: 'circle',
    x: 25.953,
    y: 38.453,
    r: 2.5
  }],
  1: [{
    type: 'circle',
    x: 2.5,
    y: 2.5,
    r: 2.5
  }, {
    type: 'rect',
    x: 0.057,
    y: 11.338,
    w: 5,
    h: 18
  }, {
    type: 'circle',
    x: 2.5,
    y: 38.453,
    r: 2.5
  }, {
    type: 'circle',
    x: 25.953,
    y: 38.453,
    r: 2.5
  }],
  2: [{
    type: 'circle',
    x: 2.5,
    y: 2.5,
    r: 2.5
  }, {
    type: 'rect',
    x: 0.057,
    y: 11.338,
    w: 5,
    h: 18
  }, {
    type: 'circle',
    x: 2.5,
    y: 38.453,
    r: 2.5
  }, {
    type: 'circle',
    x: 25.953,
    y: 38.453,
    r: 2.5
  }],
  3: [{
    type: 'circle',
    x: 2.5,
    y: 2.5,
    r: 2.5
  }, {
    type: 'rect',
    x: 0.057,
    y: 11.338,
    w: 5,
    h: 18
  }, {
    type: 'circle',
    x: 2.5,
    y: 38.453,
    r: 2.5
  }, {
    type: 'circle',
    x: 25.953,
    y: 38.453,
    r: 2.5
  }],
  4: [{
    type: 'circle',
    x: 2.5,
    y: 2.5,
    r: 2.5
  }, {
    type: 'rect',
    x: 0.057,
    y: 11.338,
    w: 5,
    h: 18
  }, {
    type: 'circle',
    x: 2.5,
    y: 38.453,
    r: 2.5
  }, {
    type: 'circle',
    x: 25.953,
    y: 38.453,
    r: 2.5
  }],
  5: [{
    type: 'circle',
    x: 2.5,
    y: 2.5,
    r: 2.5
  }, {
    type: 'rect',
    x: 0.057,
    y: 11.338,
    w: 5,
    h: 18
  }, {
    type: 'circle',
    x: 2.5,
    y: 38.453,
    r: 2.5
  }, {
    type: 'circle',
    x: 25.953,
    y: 38.453,
    r: 2.5
  }],
  6: [{
    type: 'circle',
    x: 2.5,
    y: 2.5,
    r: 2.5
  }, {
    type: 'rect',
    x: 0.057,
    y: 11.338,
    w: 5,
    h: 18
  }, {
    type: 'circle',
    x: 2.5,
    y: 38.453,
    r: 2.5
  }, {
    type: 'circle',
    x: 25.953,
    y: 38.453,
    r: 2.5
  }],
  7: [{
    type: 'circle',
    x: 2.5,
    y: 2.5,
    r: 2.5
  }, {
    type: 'rect',
    x: 0.057,
    y: 11.338,
    w: 5,
    h: 18
  }, {
    type: 'circle',
    x: 2.5,
    y: 38.453,
    r: 2.5
  }, {
    type: 'circle',
    x: 25.953,
    y: 38.453,
    r: 2.5
  }],
  8: [{
    type: 'circle',
    x: 2.5,
    y: 2.5,
    r: 2.5
  }, {
    type: 'rect',
    x: 0.057,
    y: 11.338,
    w: 5,
    h: 18
  }, {
    type: 'circle',
    x: 2.5,
    y: 38.453,
    r: 2.5
  }, {
    type: 'circle',
    x: 25.953,
    y: 38.453,
    r: 2.5
  }],
  9: [{
    type: 'circle',
    x: 2.5,
    y: 2.5,
    r: 2.5
  }, {
    type: 'rect',
    x: 0.057,
    y: 11.338,
    w: 5,
    h: 18
  }, {
    type: 'circle',
    x: 2.5,
    y: 38.453,
    r: 2.5
  }, {
    type: 'circle',
    x: 25.953,
    y: 38.453,
    r: 2.5
  }],
};

var codeMap = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9"
};

// ---------------------------------------------- //
// Forked from Ben Nadel's blog - https://www.bennadel.com/log/2267-decoding-morse-code-with-javascript.htm //
// ---------------------------------------------- //
var morseCode = (function() {

  // Define the duration of the dot in milliseconds.
  this._dotDuration = 250;

  // Define the duration of the dash in milliseconds. The
  // dash is supposed to be 3x that of the dot.
  this._dashDuration = (this._dotDuration * 3);

  // Define the pause duration. This is the time between
  // letters and is supposed to be 1x that of the dot.
  this._pauseDuration = (this._dotDuration * 1);

  this._patternMap = codeMap;

  // I am the current, transient sequence being evaluated.
  this._sequence = "";

  // ---------------------------------------------- //
  // ---------------------------------------------- //

  // I add the given value to the current sequence.
  //
  // Throws InvalidTone if not a dot or dash.
  this.addSequence = function(value) {
    // Check to make sure the value is valid.
    if (
      (value !== ".") &&
      (value !== "-")
    ) {
      // Invalid value.
      throw (new Error("InvalidTone"));
    }
    // Add the given value to the end of the current
    // sequence value.
    this._sequence += value;
    // Return this object reference.
    return (this);
  };

  // I add a dot to the current sequence.
  this.dot = function() {
    // Reroute to the addSequence();
    return (this.addSequence("."));
  };

  // I add a dash to the current sequence.
  this.dash = function() {
    // Reroute to the addSequence();
    return (this.addSequence("-"));
  };

  // I get the alpha-numeric character set as an array of
  // sequence-character pairs.
  this.getAlphabet = function() {
    // Create the empty set.
    var characterSet = [];
    // Loop over the patterns to map them to a character
    // set item.
    for (var pattern in this._patternMap) {
      // Push it onto the set.
      characterSet.push({
        sequence: pattern,
        character: this._patternMap[pattern]
      });
    }

    // Sort the character set alphabetically.
    characterSet.sort(
      function(a, b) {
        return (a.character <= b.character ? -1 : 1);
      }
    );

    // Return the character set.
    console.log(characterSet);
    return (characterSet);

  };

  // I get the dash duration.
  this.getDashDuration = function() {

    return (this._dashDuration);

  };

  // I get the dot duration.
  this.getDotDuration = function() {

    return (this._dotDuration);
  };

  // I get the pause duration.
  this.getPauseDuration = function() {

    return (this._pauseDuration);

  };

  // I reset the current sequence.
  this.resetSequence = function() {

    // Clear the sequence.
    this._sequence = "";

  };

  // I get the possible character matches based on the
  // current sequence.
  this.resolvePartial = function() {
    // Create an array to hold our possible characters.
    var potentialCharacters = [];
    // Loop over the pattern match to find partial matches.
    for (var pattern in this._patternMap) {
      // Check to see if the current sequence can be
      // the start of the given pattern.
      if (pattern.indexOf(this._sequence) === 0) {
        // Add this character to the list.
        potentialCharacters.push(
          this._patternMap[pattern]
        );
      }
    }

    // Return the potential character matches.
    return (potentialCharacters.sort());
  };

  // I get the alpha-numeric charater repsented by the
  // current sequence. I also reset the internal
  // sequence value.
  this.resolveSequence = function() {
    console.log(this._sequence);
    // Check to see if the current sequence is valid.
    if (!this._patternMap.hasOwnProperty(this._sequence)) {
      // The sequence cannot be matched.
      throw (new Error("InvalidSequence"));
    }
    // Get the alpha-numeric mapping.
    var character = this._patternMap[this._sequence];
    // Reset the sequence.
    this._sequence = "";
    // Return the mapped character.
    return (character);
  };

  // ---------------------------------------------- //
  // ---------------------------------------------- //

  // Return this object reference.
  return (this);

}).call({});

var morseLetter = (function(){
  // Current letter that is typed
  this._letter = "";
  
  this._currentPress = "";
  
   
  
  this.getLetter = function(event){
    var x = event.which || event.keyCode;
    alert(x);
  };
  
})();

var morseSVG = (function(morseCode, morseMnemonics, workSans) {

  this._morsePaper = Raphael("morseTape");
  this._currentObj = "";
  this._currentMnemonic = "";
  this._currentLetter = "";
  this._moveLength = [-60, 0];

  this._morsePaper.setViewBox(0, 0, 400, 100, true);

  this._morseElement = document.getElementById("morseTape");
  this._letterInput = document.getElementById("letter");
  this._currentSet = this._morsePaper.set();
  this._wordSet = {};
  this._newWord

  // Draw current svg element as dot to Paper
  this.drawDot = function() {
    this._currentObj = this._morsePaper.circle(200, 50, 20).attr({
      fill: "#000"
    });
    this.addToSet();
  };

  // Draw current svg element as dash to Paper
  this.drawDash = function() {
    this._currentObj = this._morsePaper.rect(150, 30, 100, 40).attr({
      fill: "#000"
    });
    this.addToSet();
  };
  this.drawSpace = function() {
    this._currentObj = this._morsePaper.rect(150, 70, 100, 10).attr({
      fill: "#000"
    });
    this.addToSet();
  };

  this.moveForDot = function() {
    this._moveLength = [-140, 0];
  };

  this.moveForDash = function() {
    this._moveLength = [-140, 0];
  };

  this.moveForSpace = function() {
    this._moveLength = [-140, 0];
  };

  this.moveSequence = function() {
    this._currentSet.translate(this._moveLength);
  };

  // Add current svg element to the "group" set
  this.addToSet = function() {
    this._currentSet.push(this._currentObj);
    this.clearObj();
  };
  
  this.translateSequence = function(character){
   this._currentMnemonic = morseMnemonics[character];
    for (var i = 0 ; i < this._currentSet.length ; i++){
      this._currentSet[i].translate(this._currentMnemonic[i].x, this._currentMnemonic[i].y)
   }
   this.drawLetter(character); 
  };
  
  this.drawLetter = function(letter) {
    this._currentLetter = this._morsePaper.path(workSans[letter]).attr({
      fill: "#000"
    });
    this.clearLetter();
  };

  // Clear current svg element
  this.clearObj = function() {
    this._currentObj = "";
  };
  
  this.clearLetter = function() {
    this._currentLetter = "";
  };

  // Clear current set of svg elements
  this.clearSet = function() {
    this._currentSet.clear();
  };

  return (this);
})(morseCode, morseMnemonics, workSans);

var initateMorse = (function(morseCode, morseSVG) {
    // Get the dot and dash durations (in milliseconds).
  var dotDuration = morseCode.getDotDuration();
  var dashDuration = morseCode.getDashDuration();
  var pauseDuration = morseCode.getPauseDuration();

  // Store the date/time for the keydown.
  var keyDownDate = null;

  // Keep a timer for post-key resolution for characters.
  var resolveTimer = null;

  // Keep a timer for adding a new space to the message.
  var spaceTimer = null;

  var keyDownTrack = function() {
    // Check to see if there is a key-down date. If
    // so, then exit - we only want the first press
    // event to be registered.
    if (keyDownDate) {
      // Don't process this event.
      return;
    }
    // Clear the resolution timer.
    clearTimeout(resolveTimer);
    // Clear the space timer.
    clearTimeout(spaceTimer);
    // Store the date for this key-down.
    keyDownDate = new Date();
  };
  
  var keyUpTrack = function() {
    // Determine the keypress duration.
    var keyPressDuration = ((new Date()) - keyDownDate);
    // Clear the key down date so subsequent key
    // press events can be processed.
    keyDownDate = null;
    // Move code set for next entry
    morseSVG.moveSequence();
    // Check to see if the duration indicates a dot
    // or a dash.
    if (keyPressDuration <= dotDuration) {
      // Push a dot.
      morseCode.dot();
      // Draw dot SVG element
      morseSVG.drawDot();
      // Set length of move for next entry
      morseSVG.moveForDot();
    } else {
      // Push a dash.
      morseCode.dash();
      // Draw dash SVG element
      morseSVG.drawDash();
      // Set length of move for next entry
      morseSVG.moveForDash();
    }
    // Display the possible characters for the current
    // sequence.
    // dom.possibleCharacters.text(
    //   morseCode.resolvePartial().join(" , ")
    // );
    // Now that the key has been pressed, we need to
    // wait a bit to see if we need to resolve the
    // current sequence (if the user doesn't interact
    // with the interpreter, we'll resolve).
    resolveTimer = setTimeout(
      function() {
        // Try to resolve the sequence.
        try {
          // Get the character respresented by
          // the current sequence.
          var character = morseCode.resolveSequence();          
        } catch (e) {
          // Reset the sequence - something
          // went wrong with the user's input.
          morseCode.resetSequence();
        }
        // Clear the possible matches.
        // dom.possibleCharacters.empty();
        
        // Set a timer to add a new space to the
        // message.
        spaceTimer = setTimeout(
          function() {
            // Move code set for next entry
            morseSVG.moveSequence();
            // Draw space SVG element
            morseSVG.drawSpace();
            // Set length of move for next entry
            morseSVG.moveForSpace();
            // Translate sequence to Letter
            morseSVG.translateSequence(character);
          },
          500
        );
      },
      (pauseDuration * 3)
    );
  };
  
  document.getElementById('cbox').onclick = function() {
    if (this.checked) {
      console.log("on");
      // For this module, we are going to bind to spacebar click
      // to indicate an interaction with the interpreter. There
      // will be no other key interaction.
      document.addEventListener("keydown", function(e) {
        var e = window.event || e;
        var key = e.which || e.keyCode;
        if (key == 32) {
          e.preventDefault();
          keyDownTrack();
        }
      });
      document.addEventListener("keyup", function(e) {
        var e = window.event || e;
        var key = e.which || e.keyCode;
        if (key == 32) {
          e.preventDefault();
          keyUpTrack();
        }
      });
    }
    else {
      console.log("off");
      // For this module, we are going to bind to spacebar click
      // to indicate an interaction with the interpreter. There
      // will be no other key interaction.
      document.addEventListener("keydown", function(e) {
        var e = window.event || e;
        var key = e.which || e.keyCode;
        e.preventDefault();
      });
      document.addEventListener("keyup", function(e) {
        var e = window.event || e;
        var key = e.which || e.keyCode;
        if (e.which <= 90 && e.which >= 48) {
          e.preventDefault();
          alert(e.keyCode)
        }
        else if (e.which <= 105 && e.which >= 96){
          alert(e.keyCode)   
        }
        else if (e.which == 13 || e.which == 16 || e.which == 20 || e.which == 32){
          alert(e.keyCode)
        }
        else {
          alert("None");
        }
      });
    }
  }
})(morseCode, morseSVG);
