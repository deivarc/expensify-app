import uuid from 'uuid';

export default () => ({
        id: uuid(),
       description: '',
       note: '',
       amount: 0,
       createdAt: 0
});