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