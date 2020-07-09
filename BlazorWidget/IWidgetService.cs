using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BlazorWidget
{
    public interface IWidgetService
    {
        event EventHandler OnWindowClosed;
        ValueTask Open(string url, string title, int height, int width);
    }
}
