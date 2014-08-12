(function($){
	$(document).on('ready', function(){
		
		var ajaxControllerPath = '';
				
		/* Опросы  */
		
		$('.survey').on('change', 'input', function(){
			var parent = $(this).parents('.module')
			parent.toggleClass('module-loading')
			$.post(ajaxControllerPath, {
				element: 'survey',
				data: { id: $(this).attr('id'), value: $(this).val() }
			}).done(function(){
				parent.toggleClass('module-loading')
				parent.find('ul').remove()
				parent.find('span').text('Спасибо, Ваш голос учтен!')
			})
		})
		
		/* PLUGINS */
		
		var width = screen.width-20;
		var slider = $('.showcase ul')
		oSLider = slider.bxSlider({
			slideWidth:980,
			pager:false,
			infiniteLoop:true,
			slideMargin:2,
			startSlide:2,
			onSliderLoad:function(){
				slider.parent().css('width',width)
				slider.css( 'width', slider.css('width').replace('px','')*1 + slider.find('img:first').width()*2 + 'px' )
			},
			onSlideNext:function($slide, a, b){
				$('.fake').remove()
				// ƒл¤ предыдущей ещЄ надо
				slider.find('li:not(.bx-clone)').eq(1).clone().addClass('fake').appendTo('.showcase ul')				
			}
		})
		
		$('.video').fancybox({
			type: 'iframe'
		});
		
		/*$('.scroll ul').perfectScrollbar({  //не работает, надо поправить
			suppressScrollX:true,
			includePadding:true
		});*/
		
		/* BASKET  */
		$('.counter.left').on('click', function(){
			var elValue=$(this).parent().children(".value");
			var text=elValue.text();
			elValue.text((parseInt(text)-1));	
			
			var price=$(this).parent().parent().children(".price").children(".value");
			text=price.text();
			price.text((parseInt(text)-price.data("price")));
		});
		
		$('.counter.right').on('click', function(){
			var elValue=$(this).parent().children(".value");
			var text=elValue.text();
			elValue.text((parseInt(text)+1));	

			var price=$(this).parent().parent().children(".price").children(".value");
			text=price.text();
			price.text((parseInt(text)+price.data("price")));
		});
		
		
		
		
		/* BASKET-END */
		
		
		
		VK.Widgets.Group("vk_groups_1", {mode: 0, width: "370", height: "300", color1: 'FFFFFF', color2: '2B587A', color3: '5B7FA6'}, 20003922)		
		VK.Widgets.Group("vk_groups_2", {mode: 0, width: "370", height: "300", color1: 'FFFFFF', color2: '2B587A', color3: '5B7FA6'}, 20003922)		
	})
})(jQuery)