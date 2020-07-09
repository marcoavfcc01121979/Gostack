interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    }
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      //email: 'marcoavfcc@gmail.com',
      email: 'marcoavfcc@marcoavf.com',
      name: 'Marco Ferreira',
    },
  },
} as IMailConfig;
