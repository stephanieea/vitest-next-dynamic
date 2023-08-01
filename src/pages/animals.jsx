import React from 'react';
import dynamic from 'next/dynamic';

const Dogs = dynamic(() => import('../components/dogs'));

export default function Animals() {
	return (
		<div>
			<Dogs/>
			<span>are the best!!!</span>
		</div>
		)
}
