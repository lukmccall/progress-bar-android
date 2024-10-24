module.exports = {
  project: {
    android: {sourceDir: './example/android'},
    ios: {project: './example/ios/example.xcworkspace'},
  },
  dependency: {
    platforms: {
      android: {
        componentDescriptors: ['RNCProgressBarComponentDescriptor'],
        cmakeListsPath: '../android/src/main/jni/CMakeLists.txt',
      },
    },
  },
};
