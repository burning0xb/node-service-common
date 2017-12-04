import { AttentionUser } from '../../model';
import dbStorage from '../../config/dbStorage';
import moment from 'moment';
import autobind from 'autobind-decorator'
import { logger } from '../../log4j';

@autobind
export default class User {

  constructor() {
  }

  /**
   * [getUserList 获取用户信息]
   * @param  {Function} cb   [description]
   * @param  {[type]}   info [description]
   * @return {Promise}       [description]
   */
  async getUserList(cb, info, mq) {
    logger.warn(`this is moment format ${moment().format('YYYY-MM-DD hh:mm:ss')}`);
    const content = {
      class: 'common',
      func: 'getOrderList',
      content: {}
    };
    const res = await mq().send(content);
    cb({ code: '00000', users: [], order: res });
  }

}
