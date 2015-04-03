import capitalize from './capitalize';

export default function randomString(words) {
	let string = '';
	let wordBanks = [
		['able','acid','angry','automatic','awake','bad','beautiful','bent','bitter','black','blue','boiling','bright','broken','brown','certain','cheap','chemical','chief','clean','clear','cold','common','complete','complex','conscious','cruel','cut','dark','dead','dear','deep','delicate','dependent','different','dirty','dry','early','elastic','electric','equal','false','fat','feeble','female','fertile','first','fixed','flat','foolish','free','frequent','full','future','general','good','gray','great','green','hanging','happy','hard','healthy','high','hollow','ill','important','kind','last','late','left','like','living','long','loose','loud','low','male','married','material','medical','military','mixed','narrow','natural','necessary','new','normal','old','open','opposite','parallel','past','physical','political','poor','possible','present','private','probable','public','quick','quiet','ready','red','regular','right','rough','round','sad','safe','same','second','secret','separate','serious','sharp','short','shut','simple','slow','small','smooth','soft','solid','special','sticky','stiff','straight','strange','strong','sudden','sweet','tall','thick','thin','tight','tired','true','violent','waiting','warm','wet','white','wide','wise','wrong','yellow','young'],
		['bamboozled','bazinga','bevy','bifurcate','bilirubin','bobolink','buccaneer','bulgur','bumfuzzle','canoodle','carbuncle','caterwaul','cattywampus','cheeky','conniption','coot','didgeridoo','dingy','doodle','doohickey','doozy','eschew','filibuster','finagle','flanker','floozy','fungible','girdle','gobsmacked','goombah','grog','gumption','gunky','hitherto','hoi-polloi','hornswoggle','hullabaloo','indubitably','janky','kahuna','katydid','kerplunk','kinkajou','knickers','loopy','manscape','monkey','mugwump','namby-pamby','nincompoop','noggin','pantaloons','passel','persnickety','popinjay','proctor','rapscallion','rookery','rumpus','scootch','scuttlebutt','shebang','shih-tzu','snarky','snuffle','spelunker','spork','sprocket','squeegee','succubus','tater','tuber','tuchis','viper','waddle','walkabout','wasabi','weasel','wenis','whatnot','wombat','wonky','zeitgeist'],
	];

	for (let i = 0; i < words; i++) {
		let randomIndex = Math.floor(Math.random()*wordBanks[i].length);
		string += capitalize( wordBanks[i][ randomIndex ] );
	}

	return string;
}