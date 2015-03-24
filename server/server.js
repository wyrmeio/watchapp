/**
 * Created by idris on 14/3/15.
 */

	/*if ( Category.find().count() === 0 ) {

		//Insert seed data
		//@TODO: find intelligent way to insert seed data. (from json or csv format)
		Category.insert({"_id":"1","name":"Music","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"2","name":"Movies","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"3","name":"Documentaries","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"4","name":"News","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"5","name":"Sports","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"6","name":"Gaming","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"7","name":"Science","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"8","name":"Education","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"9","name":"Health","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"10","name":"Cooking","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"11","name":"Lifestyle","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"12","name":"Fashion","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"13","name":"Politics","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"14","name":"Religion","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"15","name":"Technology","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"16","name":"Television","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"17","name":"Animation","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"18","name":"Automotive","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"19","name":"Entertainment","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"20","name":"Comedy","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"21","name":"Language","parent":"1","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"22","name":"Year","parent":"1","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"23","name":"Party","parent":"1","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"24","name":"Pop","parent":"1","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"25","name":"Chill","parent":"1","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"26","name":"Workout","parent":"1","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"27","name":"Dance","parent":"1","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"28","name":"Mood","parent":"1","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"29","name":"Hip Hop","parent":"1","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"30","name":"Focus","parent":"1","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"31","name":"Country","parent":"1","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"32","name":"Rock","parent":"1","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"33","name":"Folk","parent":"1","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"34","name":"Alternative","parent":"1","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"35","name":"Indie","parent":"1","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"36","name":"RnB","parent":"1","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"37","name":"Latino","parent":"1","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"38","name":"Kids","parent":"1","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"39","name":"Romance","parent":"1","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"40","name":"Dinner","parent":"1","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"41","name":"Classical","parent":"1","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"42","name":"Jazz","parent":"1","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"43","name":"Blues","parent":"1","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"44","name":"Punk","parent":"1","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"45","name":"Metal","parent":"1","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"46","name":"Christian","parent":"1","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"47","name":"Travel","parent":"1","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"48","name":"Soul","parent":"1","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"49","name":"Raggea","parent":"1","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"50","name":"Funk","parent":"1","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"51","name":"Qawali","parent":"1","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"52","name":"Country","parent":"1","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"53","name":"Language","parent":"2","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"54","name":"Year","parent":"2","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"55","name":"Trailers","parent":"2","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"56","name":"Adventure","parent":"2","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"57","name":"Sci-Fi","parent":"2","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"58","name":"Horror","parent":"2","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"59","name":"Drama","parent":"2","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"60","name":"Romance","parent":"2","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"61","name":"Musical","parent":"2","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"62","name":"Independent","parent":"2","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"63","name":"Fantasy","parent":"2","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"64","name":"Thrillers","parent":"2","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"65","name":"Animation","parent":"2","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"66","name":"Classical","parent":"2","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"67","name":"Comedy","parent":"2","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"68","name":"Children","parent":"2","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"69","name":"Family","parent":"2","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"70","name":"Cult","parent":"2","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"71","name":"Sports","parent":"2","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"72","name":"911","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"73","name":"Activist","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"74","name":"Archaeology","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"75","name":"Art and Artists","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"76","name":"Atheism","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"77","name":"Biographies","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"78","name":"Business","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"79","name":"Celebrity","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"80","name":"Crime","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"81","name":"Conference","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"82","name":"Conspiracy","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"83","name":"Countries","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"84","name":"Drugs","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"85","name":"Economics","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"86","name":"Educational","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"87","name":"Environment","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"88","name":"Evolution","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"89","name":"Gangs","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"90","name":"Health","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"91","name":"History","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"92","name":"Human Rights","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"93","name":"Lifestyle","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"94","name":"Movies","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"95","name":"Music","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"96","name":"Mystery","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"97","name":"Nature","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"98","name":"News & Politics","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"99","name":"Performing Arts","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"100","name":"Philosophy","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"101","name":"Preview Only","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"102","name":"Psychology","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"103","name":"Religion","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"104","name":"Science","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"105","name":"Society","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"106","name":"Space","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"107","name":"Spiritual","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"108","name":"Sport & Adventure","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"109","name":"Technology","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"110","name":"War","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"111","name":"1985","parent":"22","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"112","name":"1986","parent":"22","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"113","name":"1987","parent":"22","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"114","name":"1988","parent":"22","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"115","name":"1989","parent":"22","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"116","name":"1990","parent":"22","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"117","name":"1991","parent":"22","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"118","name":"1992","parent":"22","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"119","name":"1993","parent":"22","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"120","name":"1994","parent":"22","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"121","name":"1995","parent":"22","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"122","name":"1996","parent":"22","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"123","name":"1997","parent":"22","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"124","name":"1998","parent":"22","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"125","name":"1999","parent":"22","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"126","name":"2000","parent":"22","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"127","name":"2001","parent":"22","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"128","name":"2002","parent":"22","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"129","name":"2003","parent":"22","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"130","name":"2004","parent":"22","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"131","name":"2005","parent":"22","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"132","name":"2006","parent":"22","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"133","name":"2007","parent":"22","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"134","name":"2008","parent":"22","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"135","name":"2009","parent":"22","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"136","name":"2010","parent":"22","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"137","name":"2011","parent":"22","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"138","name":"2012","parent":"22","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"139","name":"2013","parent":"22","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"140","name":"2014","parent":"22","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"141","name":"2015","parent":"22","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"142","name":"1985","parent":"54","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"143","name":"1986","parent":"54","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"144","name":"1987","parent":"54","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"145","name":"1988","parent":"54","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"146","name":"1989","parent":"54","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"147","name":"1990","parent":"54","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"148","name":"1991","parent":"54","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"149","name":"1992","parent":"54","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"150","name":"1993","parent":"54","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"151","name":"1994","parent":"54","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"152","name":"1995","parent":"54","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"153","name":"1996","parent":"54","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"154","name":"1997","parent":"54","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"155","name":"1998","parent":"54","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"156","name":"1999","parent":"54","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"157","name":"2000","parent":"54","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"158","name":"2001","parent":"54","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"159","name":"2002","parent":"54","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"160","name":"2003","parent":"54","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"161","name":"2004","parent":"54","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"162","name":"2005","parent":"54","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"163","name":"2006","parent":"54","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"164","name":"2007","parent":"54","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"165","name":"2008","parent":"54","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"166","name":"2009","parent":"54","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"167","name":"2010","parent":"54","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"168","name":"2011","parent":"54","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"169","name":"2012","parent":"54","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"170","name":"2013","parent":"54","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"171","name":"2014","parent":"54","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"172","name":"2015","parent":"54","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"173","name":"English","parent":"21","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"174","name":"Hindi","parent":"21","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"175","name":"Punjabi","parent":"21","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"176","name":"Thai","parent":"21","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"177","name":"French","parent":"21","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"178","name":"German","parent":"21","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"179","name":"Korean","parent":"21","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"180","name":"Russian","parent":"21","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"181","name":"Chinese","parent":"21","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"182","name":"Japanese","parent":"21","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"183","name":"Bengali","parent":"21","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"184","name":"Tamil","parent":"21","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"185","name":"Telugu","parent":"21","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"186","name":"Kannada","parent":"21","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"187","name":"Malay","parent":"21","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"188","name":"Gujrati","parent":"21","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"189","name":"Marathi","parent":"21","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"190","name":"Arabic","parent":"21","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"191","name":"Italian","parent":"21","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"192","name":"English","parent":"53","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"193","name":"Hindi","parent":"53","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"194","name":"Punjabi","parent":"53","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"195","name":"Thai","parent":"53","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"196","name":"French","parent":"53","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"197","name":"German","parent":"53","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"198","name":"Korean","parent":"53","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"199","name":"Russian","parent":"53","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"200","name":"Chinese","parent":"53","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"201","name":"Japanese","parent":"53","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"202","name":"Bengali","parent":"53","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"203","name":"Tamil","parent":"53","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"204","name":"Telugu","parent":"53","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"205","name":"Kannada","parent":"53","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"206","name":"Malay","parent":"53","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"207","name":"Gujrati","parent":"53","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"208","name":"Marathi","parent":"53","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"209","name":"Arabic","parent":"53","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"210","name":"Italian","parent":"53","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"211","name":"India","parent":"31","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"212","name":"America","parent":"31","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"213","name":"UAE","parent":"31","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"214","name":"UK","parent":"31","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"215","name":"Russia","parent":"31","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"216","name":"Japan","parent":"31","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"217","name":"China","parent":"31","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"218","name":"Brazil","parent":"31","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"219","name":"Hollywood","parent":"55","level" : 3,"class" : " ","order" : 0,"style" : ""});
		Category.insert({"_id":"220","name":"Bollywood","parent":"55","level" : 3,"class" : " ","order" : 0,"style" : ""});
		*//*for ( var i = 1; i <= 300; i++ ) {
			Category.insert({
				name: "Cat-" + i,
				parent: null,
				level: 1,
				class: " ",
				order: 0,
				style: ""
			});
		}*//*
	}*/



Meteor.methods({
	/*categoryData: function (id, level, count) {
		if ( count === null ) {
			*//* if (Category.find({parent: id, level: level}).count() === 0) {
			 var temp = Category.findOne({_id: id})===undefined?"C":Category.findOne({_id: id}).name;
			 for (var i = 1; i <= 30; i++) {
			 Category.insert({
			 name: temp + "-" + i,
			 parent: id,
			 level: (level),
			 class: " ",
			 order: 0,
			 style: ""
			 });
			 }
			 }*//*
			return Category.find({parent: id, level: level}, {limit: 30}).fetch();
		}
		else {
			*//*  if(Category.find({level:level,name:"MC-"+(count+1),parent:id}).count()===0) {
			 for (var i = (count+1); i <= (count + 30); i++) {
			 Category.insert({
			 name: "MC-" + i,
			 parent: id,
			 level: (level),
			 class: " ",
			 order: 0,
			 style: ""
			 });
			 }
			 }*//*
			return Category.find({parent: id, level: level}, {limit: 30, skip: count}).fetch();

		}
	},*/

	getVideos: function (key1,key2,key3,key4) {


		// console.log(selected.toString());
		var result1 = HTTP.get("https://www.googleapis.com/youtube/v3/search", {query: "part=snippet&q=" + key1[0] + "&maxResults="+maxResults(parseInt(key1[1]))+"&key=AIzaSyC03h-Mb85Lg2XuC3AldOaIygB4balUcNg"});
		var result2 = HTTP.get("https://www.googleapis.com/youtube/v3/search", {query: "part=snippet&q=" + key2[0] + "&maxResults="+maxResults(parseInt(key2[1]))+"&key=AIzaSyC03h-Mb85Lg2XuC3AldOaIygB4balUcNg"});
		var result3 = HTTP.get("https://www.googleapis.com/youtube/v3/search", {query: "part=snippet&q=" + key3[0] + "&maxResults="+maxResults(parseInt(key3[1]))+"&key=AIzaSyC03h-Mb85Lg2XuC3AldOaIygB4balUcNg"});
		var result4 = HTTP.get("https://www.googleapis.com/youtube/v3/search", {query: "part=snippet&q=" + key4[0] + "&maxResults="+maxResults(parseInt(key4[1]))+"&key=AIzaSyC03h-Mb85Lg2XuC3AldOaIygB4balUcNg"});

		//var items=[];
		var temp=result1.data.items;
		/*items.push(result2.data.items);
		items.push(result3.data.items);
		items.push(result4.data.items);*/
		/*if ( result.statusCode == 200 ) {
			return result.data.items;
		} else {
			console.log("Response issue: ", result.statusCode);
			var errorJson = JSON.parse(result.content);
			throw new Meteor.Error(result.statusCode, errorJson.error);
		}*/
		//console.log(items);
		return temp.concat(result2.data.items).concat(result3.data.items).concat(result4.data.items);
	}
});

/*Meteor.publish('category-data', function (id, level) {

	return Category.find({parent: id, level: level}, {limit: 30});
});*/

maxResults=function(value){
	if(value>=70)
	return 8;
	else if(value>=36 && value<=69)
	return 6;
	else if(value>=11 && value<=35)
	return 4;
	else return 2;
}

var inProduction = function () {
	return process.env.NODE_ENV === "production";
};

if ( inProduction() ) {
	//Production App
	ServiceConfiguration.configurations.upsert(
		{service: "facebook"},
		{
			$set: {
				appId: "1576864782598720",
				loginStyle: "redirect",
				secret: "d88ed0765c82df8acf8a0eb272b92a80"
			}
		}
	);

	ServiceConfiguration.configurations.upsert(
		{ service: "twitter" },
		{
			$set: {
				consumerKey: "SPWwEMQgwLz84m3ZhXHiBHLUu",
				secret: "UIdlH3QErTxDCqe5S2dzQb6VdD6fRr5ywfWuGzbvOVJJ4zbEAe"

			}
		}
	);

}
else {

	//Development App
	ServiceConfiguration.configurations.upsert(
		{service: "facebook"},
		{
			$set: {
				appId: "1576877225930809",
				loginStyle: "redirect",
				secret: "7b263275031b169521c61900280e3fee"
			}
		}
	);

	ServiceConfiguration.configurations.upsert(
		{ service: "twitter" },
		{
			$set: {
				consumerKey: "4WluwwMjFDKSTxQrsfSTPhXiY",
				secret: "lJvXoBpfKxTlkxjqE40P66sDHvDJF5TGBGMq4PYfdN4WIyBpmA"

			}
		}
	);
}

/*Accounts.loginServiceConfiguration.insert({
 service: "google",
 clientId: "592089654146-p734klih0pshch3ov6b9s15rh75o6605.apps.googleusercontent.com",
 secret: "rB3-RHClDSS21CHT08OSTBzU"
 });*/





