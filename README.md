------------------------
Keystore Details
------------------------

alias-name : covithelp
password/passphrase : covithelp@123
CN=nikhil behera, OU=oraneintellisolutions, O=oraneintellisolutions, L=new delhi, ST=delhi, C=IN 


------------------------
Android Build steps(https://ionicframework.com/docs/deployment/play-store)
________________________
1. ionic cordova build android --prod --release
2. jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore covithelp.keystore <Path_of_unsigned_apk> covithelp
3. Enter keystore password/passphrase
4. Finally, the zip align tool must be ran to optimize the APK
5. Goto zipalign tool and run this command ./zipalign -v 4 <Path_of_unsigned_apk> <Path_of_signed_apk>
