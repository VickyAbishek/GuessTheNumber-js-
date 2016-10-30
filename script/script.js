		var random_no = Math.floor( Math.random() * 100 );
		var count=0;
		var guesses = [];
		//console.log ( random_no );

		function btn_pressed()
		{
			var val = document.getElementById("tb").value;
			if( !val )	val = 0;
			document.getElementById("tb").value = "";
			document.querySelector("#tb").focus();
			guesses.push(' ' + val);
			display_guesses ( guesses );
			display_diff ( val );
		}

		function display_guesses( guesses )
		{
			++count;
			if( count > 10)  
			{
				var text_element = document.createElement('p');
				var text_value = document.createTextNode('GameOver');
				text_element.setAttribute('id','gameover');
				text_element.appendChild(text_value);
				document.body.appendChild(text_element);

				document.querySelector('.btn').disabled = true;
 				create_newgame_button();
				return;
			}

			if ( !(document.getElementById('para'))  )
			{
				var paragraph_element = document.createElement('p');
				paragraph_element.setAttribute('id','para');
				var paragraph_text = document.createTextNode('Previous Guesses:' + guesses);
				paragraph_element.appendChild(paragraph_text);
				document.body.appendChild(paragraph_element);
			}

			else
			{
				var para = document.getElementById('para');
				var paragraph_text = document.createTextNode('Previous Guesses:' + guesses);
				para.replaceChild( paragraph_text,para.lastChild);
			}
		}

		function newgame()
		{
			!document.querySelector('#para')     ||  document.querySelector('#para').remove();
			!document.querySelector('#ng')       ||  document.querySelector('#ng').remove(); 
			!document.querySelector('#result')   ||  document.querySelector('#result').remove();
			!document.querySelector('#gameover') ||  document.querySelector('#gameover').remove();
			if(document.querySelector('.btn')) document.querySelector('.btn').disabled = false;
			random_no = Math.floor( Math.random() * 100 );
			//console.log ( "new game" + random_no );
			count=0;
			guesses = [];
		}

		function display_diff(val) 
		{
			if( count>10 ) return;
			var text;
			if ( random_no > val )
				text = "Low";
			else if ( random_no < val )
				text = "High";
			else
				text = "Game Won";

			var result = document.createElement('p');
			result.setAttribute('id','result');
			result.appendChild(document.createTextNode(text));

			if ( !document.querySelector('#result') )
				document.body.appendChild(result);
			else
			{
				document.body.removeChild(document.body.lastChild);
				document.body.appendChild(result);
			}
			if ( text === "Game Won")
				create_newgame_button();
		}

		function create_newgame_button ()
		{
				var new_button = document.createElement('button');
				var button_val = document.createTextNode('New Game');
				new_button.setAttribute('class','btn');
				new_button.setAttribute('id','ng');
				new_button.setAttribute('onclick','newgame()');
				new_button.appendChild(button_val);
				document.body.appendChild(new_button);
		}
