function calc(c, a, b){ 

	switch (c){
		case '':
			return 'unknown operation';
			case '+':
				return a + b;
				case '-':
					return a - b;
					case '/':
						return a / b;
						case '*':
							return a * b;
							case '%':
								return a % b;
								case '**':
									return a ** b;
									default:
										return 'Error';
										break;
	}
}

console.log(calc('+', 2, 2));
console.log(calc('-', 2, 2));
console.log(calc('/', 2, 2));
console.log(calc('*', 2, 2));
console.log(calc('%', 2, 2));
console.log(calc('', '', ''));
console.log(calc('5', '2', '2'));
console.log(calc('+', 's', 'd'));