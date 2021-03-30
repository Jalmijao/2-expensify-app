import moment from 'moment';

export default [{
    id:'1',
    description:'gum',
    note:'',
    amount:198,
    createdAt:0
},{
    id:'2',
    description:'buble',
    note:'',
    amount:231232,
    createdAt:moment(0).subtract(4,'days').valueOf()
},{
    id:'3',
    description:'credito',
    note:'',
    amount:450000,
    createdAt:moment(0).add(4,'days').valueOf()
}];