import thumbnail from "./assets/thumbnail.png";

const longFormList = [
	{
		id: 1,
		thumbnail: thumbnail,
		runtime: "1:13:21",
		profile: thumbnail,
		title: "밴드 음악",
		user: "담이네",
		views: "44만회",
		date: "1년전",
	},
	{
		id: 2,
		thumbnail: thumbnail,
		runtime: "1:13:21",
		profile: thumbnail,
		title: "록 음악",
		user: "담이네",
		views: "4만회",
		date: "1년전",
	},
	{
		id: 3,
		thumbnail: thumbnail,
		runtime: "1:13:21",
		profile: thumbnail,
		title: "발라드",
		user: "담이네",
		views: "35만회",
		date: "1년전",
	},
];

function LongForm() {
	return (
		<>
			{longFormList.map((form) => (
				<div id={form.id}>
					{/* main */}
					<div>
						{/* 사진 데이터는 img 태그 활용 */}
						<img src={form.thumbnail} />
						<div>{form.runtime}</div>
					</div>
					{/* info */}
					<div>
						{/* 사진 데이터는 img 태그 활용 */}
						<img src={form.profile} />
						<div>
							<div>{form.title}</div>
							<div>{form.user}</div>
							<div>
								조회수 {form.views} - {form.date}
							</div>
						</div>
						<div>setting</div>
					</div>
				</div>
			))}
		</>
	);
}

export default LongForm;
