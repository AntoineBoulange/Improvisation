﻿namespace Improvisation
{
    partial class Form1
    {
        /// <summary>
        /// Variable nécessaire au concepteur.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Nettoyage des ressources utilisées.
        /// </summary>
        /// <param name="disposing">true si les ressources managées doivent être supprimées ; sinon, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Code généré par le Concepteur Windows Form

        /// <summary>
        /// Méthode requise pour la prise en charge du concepteur - ne modifiez pas
        /// le contenu de cette méthode avec l'éditeur de code.
        /// </summary>
        private void InitializeComponent()
        {
            this.b_mixte = new System.Windows.Forms.Button();
            this.b_comp = new System.Windows.Forms.Button();
            this.Type = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // b_mixte
            // 
            this.b_mixte.Location = new System.Drawing.Point(472, 35);
            this.b_mixte.Name = "b_mixte";
            this.b_mixte.Size = new System.Drawing.Size(75, 23);
            this.b_mixte.TabIndex = 0;
            this.b_mixte.Text = "Mixte";
            this.b_mixte.UseVisualStyleBackColor = true;
            this.b_mixte.Click += new System.EventHandler(this.b_mixte_Click);
            // 
            // b_comp
            // 
            this.b_comp.Location = new System.Drawing.Point(553, 35);
            this.b_comp.Name = "b_comp";
            this.b_comp.Size = new System.Drawing.Size(75, 23);
            this.b_comp.TabIndex = 1;
            this.b_comp.Text = "Comparée";
            this.b_comp.UseVisualStyleBackColor = true;
            this.b_comp.Click += new System.EventHandler(this.b_comp_Click);
            // 
            // Type
            // 
            this.Type.AutoSize = true;
            this.Type.Location = new System.Drawing.Point(535, 70);
            this.Type.Name = "Type";
            this.Type.Size = new System.Drawing.Size(0, 13);
            this.Type.TabIndex = 2;
            this.Type.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            this.Type.Visible = false;
            this.Type.Click += new System.EventHandler(this.Type_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1277, 462);
            this.Controls.Add(this.Type);
            this.Controls.Add(this.b_comp);
            this.Controls.Add(this.b_mixte);
            this.Name = "Form1";
            this.Text = "Form1";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button b_mixte;
        private System.Windows.Forms.Button b_comp;
        private System.Windows.Forms.Label Type;
    }
}

