# BlazorWidget
A simple package to create "widgets" of a Blazor Application so user can pop-out a portion of the Blazor app if they wish to. Of course, the application developer should allow the app to be loaded with options to pop-out in a new window and configure routes so that each widget points to a particular route

### Installing
You can install the package from Nuget as:

    Install-Package BlazorWidget

Or from VS package manager.

### Setup
The BlazorWidget service can be registered in startup.cs (Blazor Server) 

    public void ConfigureServices(IServiceCollection services)
    {
        ...
        services.AddBlazorWidgetService();
        ...
    }


or program.cs (Web Assembly)


    public static async Task Main(string[] args)
    {
        ...
        builder.Services.AddBlazorWidgetService();
        ...
    }
    
### Usage

Include the following snippet in your index.html or _Host.cshtml file:

    <script src="_content/BlazorWidget/widget.js"></script>

``IWidgetService`` can be injected in a .cshtml file as follows:

    @inject BlazorWidget.IWidgetService widgetService
    @code{
      private async Task HandleClick()
      {
          widgetService.OnWindowClosed += windowClosed;
          await widgetService.Open("http://localhost", "page1", 500, 500);
      }
      private void windowClosed(object sender, EventArgs e)
      {
          //Do something here
      }
    }

### Method(s) available:
* Open
#### Parameters
url - A string representing the route (of your own project) or any other URL
identifier - A unique identifier for the new widget (window), to avoid duplicate windows if user performs same operation multiple times.
height - the height of the new widget
width - the width of the new widget

### Event(s) available:
* OnWidgetClosed - to handle widget closed event with it's name
