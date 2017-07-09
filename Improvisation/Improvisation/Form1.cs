using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Drawing.Drawing2D;

namespace Improvisation
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {

        }

        private void button2_Click(object sender, EventArgs e)
        {

        }

        protected override void OnPaint(PaintEventArgs e)
        {
            Point[] pointsArray =
            {
                new Point(50, 0),
                new Point(450, 0),
                new Point(440, 10),
                new Point(430, 20),
                new Point(70, 20),
                new Point(60, 10)
            };

            GraphicsPath poly = new GraphicsPath();
            poly.AddPolygon(pointsArray);

            Pen border = new Pen(Color.LightBlue, 4);
            e.Graphics.DrawPolygon(border, pointsArray);
        }
    }
}
