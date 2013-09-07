#import <Cordova/CDVPlugin.h>

@interface KeyboardToolbarRemover : CDVPlugin

- (void)show:(CDVInvokedUrlCommand*)command;
- (void)hide:(CDVInvokedUrlCommand*)command;

@end