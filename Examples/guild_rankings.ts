import { Tatsu } from '../index';

const client = new Tatsu('API_KEY');

client.getGuildRankings('173184118492889089').then(gr => {
	console.log(gr);
}, console.error);

