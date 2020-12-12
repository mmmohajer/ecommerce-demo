import React from 'react';
import StartRating from 'react-star-ratings';

export const showAverage = (p) => {
	if (p && p.ratings) {
		let ratingsArray = p && p.ratings;
		let total = [];
		let length = ratingsArray.length;

		ratingsArray.map((r) => total.push(r.star));
		let toatalReduced = total.reduce((p, n) => p + n, 0);
		let highest = length * 5;
		let result = (toatalReduced * 5) / highest;
		return (
			<div className="text-center pt-1 pb-3">
				<span>
					<StartRating 
					rating={result} 
					starDimension="20px" 
					starSpacing="2px"
					starRatedColor="red"
					editing={false}
					/>
					({p.ratings.length})
				</span>
			</div>
		)
	}
}