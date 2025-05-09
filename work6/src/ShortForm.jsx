import thumbnail from "./assets/thumbnail.png";

const shortFormList = [
	{ id: 1, thumbnail: thumbnail, title: "제목", views: "123만회" },
	{ id: 2, thumbnail: thumbnail, title: "제목", views: "123만회" },
	{ id: 3, thumbnail: thumbnail, title: "제목", views: "123만회" },
	{ id: 4, thumbnail: thumbnail, title: "제목", views: "123만회" },
	{ id: 5, thumbnail: thumbnail, title: "제목", views: "123만회" },
];

function ShortForm() {
	return (
		<div>
			{shortFormList.map((sf) => (
				<div id={sf.id}>
					<img src={sf.thumbnail} />
					<div>
						<div>{sf.title}</div>
						<div>{sf.views}</div>
						<div>settings</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default ShortForm;
