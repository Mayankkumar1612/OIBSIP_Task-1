const cal = () => 
		{
			const num =document.getElementById('deg').value;
			const selc =document.getElementById('temp');
			const val=temp.options[selc.selectedIndex].value;
			
			const celsiustofahrenheit = (celsius) => {
					let fah = Math.round((celsius * 9/5) +32);
					return fah;
			}
			const fahrenheittocelsius = (fahr) => {
				let celc = Math.round((fahr -32) * 5/9);
				return celc;
			}
			let res;
			if(val=='celsius')
			{
				res = celsiustofahrenheit(num);
				document.getElementById('result').value=res +"°FAHRENHEIT";
				
			}else
			{
				res = fahrenheittocelsius(num);
				document.getElementById('result').value=res +"°CELSIUS";
			}
			
		}