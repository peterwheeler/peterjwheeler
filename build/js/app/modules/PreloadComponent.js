import React from 'react';
import Createjs from 'preload-js';

export default class PreloadComponent extends React.Component {

	constructor(props) {
	  super(props);
	  const queue = new Createjs.LoadQueue(true);
	}

	// load() {

	// queue.loadManifest([
	//   {
	//     id:   '1',
	//     src:  'http://upload.wikimedia.org/wikipedia/commons/a/a2/Polycyclic_Aromatic_Hydrocarbons_In_Space.jpg'
	//   },
	//   {
	//     id: '2',
	//     src: 'http://static3.businessinsider.com/image/522746c56bb3f72e2a316155/photo-airbus-proves-its-huge-new-warplane-doesnt-need-a-paved-runway.jpg'
	//   },
	//   {
	//     id:   '3',
	//     src:  'http://www.chem.gla.ac.uk/staff/wynne/i/2005/TRVS/TRVS-group-photo-huge.jpg'
	//   },
	//   {
	//     id:   '4',
	//     src:  'http://upload.wikimedia.org/wikipedia/commons/c/cb/WA_-_Dry_Falls_-_Huge_Channel_v1.png'
	//   }
	// ]);
	// 	queue.on("fileload", handleFileLoad, this);
	// 	queue.on("complete", handleComplete, this);
	// 	queue.load();
	// }

	// handleComplete(){
	// 	console.log("finished");
	// }



}