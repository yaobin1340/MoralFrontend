angular
	.module( 'app' )
	.controller('LoginCtrl', function LoginCtrl( $scope, $injector, $rootScope, $modal, sweetAlert, notify,$window) {
		var $http = $injector.get( '$http' );
		var $config = $injector.get( '$config' );
		var $timeout = $injector.get( '$timeout' );
		var $session = $injector.get('$session');
		var $location = $injector.get('$location');
		var $state = $injector.get( '$state' );
		var dogNotPresent = false;

		$scope.openModal_login = function () {
			var modalInstance = $modal.open({
				templateUrl: 'views/modal/modal_login.html',
                controller: ModalInstanceCtrl
			});
    	};

		/**********************************************************************************************
		 Function: getChallenge
		 Parameters: none
		 Return: challenge
		 Description: Send XMLHttpRequest get challenge.
		 ***********************************************************************************************/
		function getChallenge()
		{
			var challenge = sendRequest("auth/GetChallge?challenge=getChallenge");
			return ""+challenge+"";
		}

		/**********************************************************************************************
		 Function: getAuthCode
		 Parameters: none
		 Return: authCode
		 Description: Send XMLHttpRequest get authCode.
		 ***********************************************************************************************/
		function getAuthCode()
		{
			var authCode;
			authCode = sendRequest("auth/ConfigInfo?data=AuthCode");
			return ""+authCode+"";
		}

		/**********************************************************************************************
		 Function: getVendorID
		 Parameters: none
		 Return: VendorID
		 Description: Send XMLHttpRequest get VendorID.
		 ***********************************************************************************************/
		function getVendorID()
		{
			var vendorID;
			vendorID = sendRequest("auth/ConfigInfo?data=VendorID");
			return ""+vendorID+"";
		}

		/**********************************************************************************************
		 Function: getFactor
		 Parameters: none
		 Return: factor
		 Description: Send XMLHttpRequest get Factor.
		 ***********************************************************************************************/
		function getFactor()
		{
			var factor = sendRequest("ConfigInfo.php?data=Factor");
			return ""+factor+"";
		}

		/**********************************************************************************************
		 Function: doAuth
		 Parameters: dogID, strDigst
		 Return: factor
		 Description: Send XMLHttpRequest do authenticate.
		 ***********************************************************************************************/
		function doAuth(dogid, strDigst,challenge)
		{
			var ret = sendRequest("auth/AuthChk?dogid="+dogid+"&digest="+strDigst+"&challenge="+challenge);
			return ret;
		}

		/**********************************************************************************************
		 Function: createRequest
		 Parameters: none
		 Return: challenge
		 Description: Send XMLHttpRequest get challenge.
		 ***********************************************************************************************/
		function sendRequest(url)
		{
			var httpRequest = null;

			// Firefox, Opera 8.0+, Safari
			if(window.XMLHttpRequest)
			{
				httpRequest = new XMLHttpRequest();
			}
			else
			{
				// IE
				try
				{
					httpRequest = new ActiveXObject("Msxm12.XMLHTTP");
				}
				catch(e)
				{
					try
					{
						httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
					}
					catch(e)
					{
					}
				}
			}

			if(null == httpRequest)
			{
				alert("Browser does not support HTTP Request");
				return false;
			}
			httpRequest.open('GET', 'http://121.40.92.176:3999/' + url, false);
			httpRequest.send(null);
			var xmlText = httpRequest.responseText;
			var reg = /[^\[][^\]]*[^\]]/;
			var newxmlText = reg.exec(xmlText);
			return newxmlText;
		}

		function getAuthObject()
		{
			var objAuth = "";
			if(window.ActiveXObject || "ActiveXObject" in window) //IE
			{
				objAuth = document.getElementById("AuthIE");
			}
			else
			{
				objAuth = document.getElementById("AuthNoIE");
			}
			return objAuth;
		}

		function embedTag()
		{
			if(window.ActiveXObject || "ActiveXObject" in window) //IE
			{
				;
			}
			else
			{
				// var temp = document.body.innerHTML;
				var tag = "<embed id=\"AuthNoIE\" type=\"application/x-dogauth\" width=0 height=0 hidden=\"true\"></embed>";
				// document.body.innerHTML = tag + temp;
				$("body").append(tag);
			}
		}

		/**********************************************************************************************
		 Function: clearInfo
		 Parameters: none
		 Return: none
		 Description: Clear the error info displayed in page.
		 ***********************************************************************************************/
		function clearInfo()
		{
			document.getElementById("errorinfo").innerHTML="";
		}

		/**********************************************************************************************
		 Function: reportStatus
		 Parameters: status
		 Return: Description
		 Description: Report status's description.
		 ***********************************************************************************************/
		function reportStatus(status)
		{
			var text = "Unknown status code";
			switch (status)
			{
				case 0:     text = "Success";
					break;
				case 1:     text = "Request exceeds data file range";
					break;
				case 3:     text = "System is out of memory";
					break;
				case 4:     text = "Too many open login sessions";
					break;
				case 5:     text = "Access denied";
					break;
				case 7:     text = "Required SuperDog not foundaaaaa";
					break;
				case 8:     text = "Encryption/decryption data length is too short";
					break;
				case 9:     text = "Invalid input handle";
					break;
				case 10:    text = "Specified File ID not recognized by API";
					break;
				case 15:    text = "Invalid XML format";
					break;
				case 18:    text = "SuperDog to be updated not found";
					break;
				case 19:    text = "Invalid update data";
					break;
				case 20:    text = "Update not supported by SuperDog";
					break;
				case 21:    text = "Update counter is set incorrectly";
					break;
				case 22:    text = "Invalid Vendor Code passed";
					break;
				case 24:    text = "Passed time value is outside supported value range";
					break;
				case 26:    text = "Acknowledge data requested by the update, however the ack_data input parameter is NULL";
					break;
				case 27:    text = "Program running on a terminal server";
					break;
				case 29:    text = "Unknown algorithm used in V2C file";
					break;
				case 30:    text = "Signature verification failed";
					break;
				case 31:    text = "Requested Feature not available";
					break;
				case 33:    text = "Communication error between API and local SuperDog License Manager";
					break;
				case 34:    text = "Vendor Code not recognized by API";
					break;
				case 35:    text = "Invalid XML specification";
					break;
				case 36:    text = "Invalid XML scope";
					break;
				case 37:    text = "Too many SuperDog currently connected";
					break;
				case 39:    text = "Session was interrupted";
					break;
				case 41:    text = "Feature has expired";
					break;
				case 42:    text = "SuperDog License Manager version too old";
					break;
				case 43:    text = "USB error occurred when communicating with a SuperDog";
					break;
				case 45:    text = "System time has been tampered with";
					break;
				case 46:    text = "Communication error occurred in secure channel";
					break;
				case 50:    text = "Unable to locate a Feature matching the scope";
					break;
				case 54:    text = "The values of the update counter in the file are lower than those in the SuperDog";
					break;
				case 55:    text = "The first value of the update counter in the file is greater than the value in the SuperDog";
					break;
				case 400:   text = "Unable to locate dynamic library for API";
					break;
				case 401:   text = "Dynamic library for API is invalid";
					break;
				case 500:   text = "Object incorrectly initialized";
					break;
				case 501:   text = "Invalid function parameter";
					break;
				case 502:   text = "Logging in twice to the same object";
					break;
				case 503:   text = "Logging out twice of the same object";
					break;
				case 525:   text = "Incorrect use of system or platform";
					break;
				case 698:   text = "Requested function not implemented";
					break;
				case 699:   text = "Internal error occurred in API";
					break;
				case 700:   text = "Password's length should be between 6-16 characters";
					break;
				case 703:   text = "Verify password failed";
					break;
				case 704:   text = "User's password length should be between 6-16 characters";
					break;
				case 705:   text = "Modify user password failed";
					break;
				case 802:   text = "The parameter is null";
					break;
				case 803:   text = "The length of authenticate code is not correct";
					break;
				case 804:   text = "Have not login yet";
					break;
				case 810:   text = "Password's length is wrong";
					break;
				case 811:   text = "The length of parameter is not correct";
					break;
				case 812:   text = "Info's length is wrong";
					break;
				case 813:   text = "Name's length is wrong";
					break;
				case 814:   text = "The length of authenticate factor is not correct";
					break;
				case 815:   text = "The length of Dog ID is not correct";
					break;
				case 821:   text = "Need to verify SO password";
					break;
				case 822:   text = "Need to verify Password";
					break;
				case 823:   text = "Buffer length is not enough";
					break;
				case 824:   text = "Need to initialize";
					break;
				case 825:   text = "Password has been locked";
					break;
				case 831:   text = "Verify password failed, you still have 14 chances";
					break;
				case 832:   text = "Verify password failed, you still have 13 chances";
					break;
				case 833:   text = "Verify password failed, you still have 12 chances";
					break;
				case 834:   text = "Verify password failed, you still have 11 chances";
					break;
				case 835:   text = "Verify password failed, you still have 10 chances";
					break;
				case 836:   text = "Verify password failed, you still have 9 chances";
					break;
				case 837:   text = "Verify password failed, you still have 8 chances";
					break;
				case 838:   text = "Verify password failed, you still have 7 chances";
					break;
				case 839:   text = "Verify password failed, you still have 6 chances";
					break;
				case 840:   text = "Verify password failed, you still have 5 chances";
					break;
				case 841:   text = "Verify password failed, you still have 4 chances";
					break;
				case 842:   text = "Verify password failed, you still have 3 chances";
					break;
				case 843:   text = "Verify password failed, you still have 2 chances";
					break;
				case 844:   text = "Verify password failed, you still have 1 chance";
					break;
				case 845:   text = "Password has been locked";
					break;

				case 901:   text = "Please enter your user name!";
					break;
				case 902:   text = "Name length should be between 1-32 characters";
					break;
				case 903:   text = "Name is illegal";
					break;
				case 904:   text = "Please enter your password";
					break;
				case 905:   text = "Password's length should be between 6-16 characters";
					break;
				case 906:   text = "Password is illegal";
					break;
				case 907:   text = "This password is not safe, please enter another one";
					break;
				case 908:   text = "Please enter your confirm password";
					break;
				case 909:   text = "Confirm password's length should be between 6-16 characters";
					break;
				case 910:   text = "Password is illegal";
					break;
				case 911:   text = "Passwords do not match";
					break;
				case 1001:   text = "no dog_auth_srv in java.library.path";
					break;
				case 1002:   text = "Fail to get challenge";
					break;
				case 1003:   text = "Fail to get challenge";
					break;
				case 1010:   text = "Fail to load the library: dog_auth_srv_php.dll! Please confirm your configuration file is right.";
					break;
				case 1011:   text = "Can not find session file! Please confirm you have create session folder and set the folder path!";
					break;
				case 1020:   text = "The SuperDog has been registered!";
					break;
			}
			document.getElementById("errorinfo").innerHTML = text + " (" + status + ")\n";
		}

		function checkDog()
		{
			var stat = "";
			var authCode = "";
			var scope = "<dogscope/>\n";



			if(typeof $session.get('authCode') != "object"){
				authCode = $session.get('authCode');
			}else{
				//Get Auth Code
				authCode = getAuthCode();
				$session.set('authCode', authCode)
				$session.save()
			}

			//Get object
			objAuth = getAuthObject();


			//Open
			stat = objAuth.Open(scope, authCode);
			if(0 != stat)
			{
				dogNotPresent = true;
				// reportStatus(stat);
				$state.go( 'login' );
			}
			else
			{
				if (dogNotPresent == true)
				{
					dogNotPresent = false;
					$window.location.reload();
				}
			}

			//Execute the check again after 2 seconds
			setTimeout(checkDog, 2000);
		}

		//Load callback functions, insertDog() and removeDog()
		function loadFunc()
		{
			var objAuth;

			//Get object
			objAuth = getAuthObject();

			if(navigator.userAgent.indexOf("Window")>0)
			{
				//Windows
				if (window.ActiveXObject || "ActiveXObject" in window)  //IE
				{
					objAuth.SetCheckDogCallBack("insertDog", "removeDog");
				}
				else
				{
					objAuth.SetCheckDogCallBack("insertDog", "removeDog");
					objAuth.InsertFunc = insertDog;
					objAuth.RemoveFunc = removeDog;
				}
			}
			else if(navigator.userAgent.indexOf("Mac")>0)
			{
				setTimeout(checkDog, 1000);
			}
			else if(navigator.userAgent.indexOf("Linux")>0)
			{
				setTimeout(checkDog, 1000);
			}
			else
			{
				;
			}
		}

		$scope.validateLogin = function()
		{
			var challenge = "";
			var stat = "";
			var objAuth = "";
			var vmData = "";
			var dogID = "";
			var digest = "";
			var scope = "<dogscope/>\n";
			var authCode = "";
			var name = document.getElementById("username").value;
			var pwd = document.getElementById("password").value;
			document.getElementById("password").value="";
			document.getElementById("errorinfo").innerHTML = "";
			if(pwd.length<6 || pwd.length>16)
			{
			   reportStatus(700);
			   return false;
			}
			if(window.ActiveXObject || "ActiveXObject" in window) //IE
			{
			   //Add onfocus event
			   var obj = document.getElementById("password");
			   if (Object.hasOwnProperty.call(window, "ActiveXObject") && !window.ActiveXObject)
			   {	//Browser is IE 11
			       obj.addEventListener("onfocus", clearInfo, false);
			   }
			   else
			   {
			       obj.attachEvent("onfocus", clearInfo);
			   }
			}

			//Get Object
			objAuth = getAuthObject();

			//Get Auth Code
			authCode = getAuthCode();

			//Open the dog
			stat = objAuth.Open(scope, authCode);
			if(0 != stat)
			{
			   reportStatus(stat);
			   return false;
			}

			//Verify the password
			stat = objAuth.VerifyUserPin(pwd);
			if(0 != stat)
			{
			   objAuth.Close();
			   reportStatus(stat);
			   return false;
			}

			//Get the DogID
			stat = objAuth.GetDogID();
			if(0 != stat)
			{
			   objAuth.Close();
			   reportStatus(stat);
			   return false;
			}

			//Save the DogID
			dogID = objAuth.DogIdStr;
			document.getElementById("dogid").value = dogID;

			//Get challenge string
			challenge = getChallenge();
			if(-1 != challenge.indexOf("error"))
			{
			   if(-1 != challenge.indexOf("undefined function dog_auth_get_challenge"))
			   {
			       reportStatus(1010);
			   }
			   else
			   {
			       reportStatus(1002);
			   }
			   objAuth.Close();
			   return false;
			}
			else if(-1 != challenge.indexOf("session_start"))
			{
			   if(-1 != challenge.indexOf("No such file or directory"))
			   {
			       reportStatus(1011);
			   }
			   else
			   {
			       reportStatus(1002);
			   }
			   objAuth.Close();
			   return false;
			}

			//Generate digest
			stat = objAuth.GetDigest(challenge);
			if(0 != stat)
			{
			   objAuth.Close();
			   reportStatus(stat);
			   return false;
			}

			digest = objAuth.DigestStr;
			document.getElementById("response").value = digest;

			//Do authenticate
			stat = doAuth(dogID, digest,challenge);
			if(0 != stat)
			{
			   objAuth.Close();
			   reportStatus(stat);
			   return false;
			}

			$state.go( 'dashboard' );
	   }

		var scope = "<dogscope/>\n";

		embedTag();

		//Get object
		objAuth = getAuthObject();

		//Get Auth Code
		authCode = getAuthCode();
		//Open the dog
		stat= objAuth.Open(scope, authCode);

		if(0 != stat)
		{
			reportStatus(stat);
			throw ("Open Dog Error!");
		}

		//Get username from the dog
		stat= objAuth.GetUserName();
		if(0 != stat)
		{
			objAuth.Close();
			reportStatus(stat);
			throw ("Get Dog Username Error!");
		}
		document.getElementById("username").value=objAuth.UserNameStr;
		objAuth.Close();

		loadFunc()



	});
