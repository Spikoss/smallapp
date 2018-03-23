var	app	= getApp();

Page({

  /**
   * 页面的初始数据
   */
  data:	{
	title: ['休闲娱乐'],
	//点击左侧改变右侧的值
	nav_list: [
	  {
		id:	0,
		name: '休闲娱乐',
		content_item: [{
		  content_text:	'111',
					content_images:	"../../images/icon.png"

		}, {
		  content_text:	'22	22',
		  content_images: "https://www.w3cschool.cn/attachments/cover/cover_nodejs.png?t=1500369786"
		}],

	  },
	  {
		id:	1,
		name: '生活服务',
		content_item: [{
		  content_text:	'11',
				   content_images: "../../images/icon.png"

		}, {
		  content_text:	'111',
					content_images:	"../../images/icon.png"

		}, {
		  content_text:	'11',
					content_images:	"../../images/icon.png"

		}]
	  },
	  {
		id:	2,
		name: '运动健身',
		content_item: [{
		  content_text:	'11',
		   content_images: "../../images/icon.png"
		}, {
		  content_text:	'11',
		   content_images: "../../images/icon.png"
		}, {
		  content_text:	'11',  content_images: "../../images/icon.png"
		}, {
		  content_text:	'11',  content_images: "../../images/icon.png"
		}]
	  },
	  {
		id:	3,
		name: '教育培训',
		content_item: [{
		  content_text:	'11',
					content_images:	"../../images/icon.png"

		}, {
		  content_text:	' 11',
					content_images:	"../../images/icon.png"

		}],
	  }
	],
	  },
	],
	open: false,
	//default右侧的值
	content_item: [{
	  content_text:	'11',
	   content_images: "../../images/icon.png"
	}, {
	  content_text:	'11	11',
	  content_images: "../../images/icon.png"
	}],
  },
  //列表的操作函数
  open_list: function (opts) {
	let	list_id	= opts.currentTarget.dataset.id;
	let	title_text = opts.currentTarget.dataset.title;
	let	content_item = opts.currentTarget.dataset.contentitem;
	console.log(list_id	+ "=========");
	this.setData({
	  title: title_text, open: false,
	  content_item:	content_item
	}, );
  },
  //左侧导航的开关函数
  off_canvas: function () {
	this.data.open ? this.setData({	open: false	}) : this.setData({	open: true });
  }
})