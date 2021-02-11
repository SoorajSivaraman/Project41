class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h3');
       this.title = createElement('h2');
       this.errorText = createElement('h2');
       this.waitText = createElement('h3');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.errorText.hide();
        this.waitText.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(400, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');

        this.button.mousePressed(() => {
            player.name = this.input.value();
            player.name = player.name.trim();
            if(player.name != "")
            {
              this.input.hide();
              this.errorText.hide();
              this.button.hide();
              playerCount += 1;
              player.index = playerCount;
              player.update();
              player.updateCount(playerCount);
              this.greeting.html("Hello " + player.name)
              this.greeting.position(450,250);
              this.greeting.style('color', 'white');
              this.greeting.style('font-size', '70px');
              if(playerCount === 1)
              {
                this.waitText.html("Wait till another player joins.")
                this.waitText.position(250, 350);
                this.waitText.style('color', 'white');
                this.waitText.style('font-size', '70px');
              }
            }
            else
            {
              errorState = 1;
            }
            if(errorState === 1)
            {
                this.errorText.html("Please enter valid Name.");
                this.errorText.position(525, 550);
                errorState = 0;
            }
        });

    }
}