if (this.props.url !== prevProps.url) {
    this.createSound(sound => this.updateSound(sound, prevProps));
  } 
  else {
    this.updateSound(this.sound);
    this.updateSound(this.sound, prevProps);
  }
