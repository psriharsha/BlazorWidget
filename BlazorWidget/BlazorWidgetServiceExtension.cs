using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace BlazorWidget
{
    public static class BlazorWidgetServiceExtension
    {
        public static IServiceCollection AddBlazorWidgetService(this IServiceCollection services)
        {
            return services.AddSingleton<IWidgetService, WidgetService>();
        }
    }
}
